import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

import Menu, { MenuItem } from './Menu';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [followingUser, setFollowingUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: INIT_PAGE, per_page: PER_PAGE })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        userService
            .getSuggested({ page: 2, per_page: PER_PAGE })
            .then((data) => {
                /* điều kiện luôn sai vì không thể truy cập biến data.is_followed */
                if (data.is_followed === true) {
                } else {
                    setFollowingUser(data);
                }
            })
            .catch((error) => console.log(error));
    }, []);
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
                <SuggestedAccounts data={suggestedUser} label="Suggested accounts" />
                <SuggestedAccounts data={followingUser} label="Following accounts" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
