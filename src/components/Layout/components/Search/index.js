import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from 'react';
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
        setSearchValue(e.target.value);
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
        } /* mã hóa ký tự đặt biệt trên URL */

        setLoading(true);

        /* gán searchValue = deBounced */
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(deBounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        /* gán searchValue = deBounced */
    }, [deBounced]);

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
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
