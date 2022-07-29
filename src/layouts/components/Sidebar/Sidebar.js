import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/Accountitem';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedList, setSuggestedList] = useState([]);

    useEffect(() => {
        fetch(` https://tiktok.fullstack.edu.vn/api/users/search?q=n&type=more`)
            .then((res) => res.json())
            .then((res) => {
                setSuggestedList(res.data);
            });
    });

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon icon={faUserGroup} />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideoCamera} />} />

                {/* list Suggested nav */}

                <div className={cx('user-container')}>
                    <h4 className={cx('nav-tt-title')}> Suggested accounts</h4>
                    {suggestedList.map((result) => (
                        <AccountItem key={result.id} data={result} className={() => cx('suggested-item')} />
                    ))}
                    <p className={cx('see')}> See all</p>
                </div>

                {/* list following nav */}
                <div className={cx('user-container')}>
                    <h4 className={cx('nav-tt-title')}> Following accounts</h4>
                    {suggestedList.map((result) => (
                        <AccountItem key={result.id} data={result} className={() => cx('suggested-item')} />
                    ))}
                    <p className={cx('see')}> See more</p>
                </div>
                {/* list discover nav */}
                <div className={cx('user-container')}>
                    <h4 className={cx('nav-tt-title')}> Discover accounts</h4>
                    <div className={cx('discover-item')}>
                        <p className={cx('item-p-text')}>suthatla</p>
                        <p className={cx('item-p-text')}>sansangthaydoi</p>
                        <p className={cx('item-p-text')}>mackedoi</p>
                        <p className={cx('item-p-text')}>yeudonphuong</p>
                        <p className={cx('item-p-text')}> Yêu đơn phương là gì(MEE remix)</p>
                    </div>
                </div>
            </Menu>
        </aside>
    );
}

export default Sidebar;
