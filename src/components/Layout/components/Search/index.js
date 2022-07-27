import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchServices';
import { wrapper as ProperWrapper } from '~/components/Popper';
import AccountItem from '../Accountitem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const deBounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);
    };

    const handleClear = () => {
        setSearchValue('');

        //setSearchResult([]);
        /* gán con trỏ chuột vào thẻ input */
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        /* gán searchValue = deBounced */
        if (!deBounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(deBounced);

            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
        /* gán searchValue = deBounced */
    }, [deBounced]);

    const handleSubmit = (e) => e.preventDefault();

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <ProperWrapper>
                        <h4 className={cx('search-title')}> Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </ProperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    spellCheck="false"
                    placeholder="Search videos or accounts"
                    onChange={handleSearch}
                    /* khi focus gán lại setShowResult = true để hiển thị */
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />

                {/* Xoa du lieu tren input */}
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
