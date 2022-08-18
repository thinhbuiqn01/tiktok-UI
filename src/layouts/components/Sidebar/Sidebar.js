import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
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
                <SuggestedAccounts label="Suggested accounts" />
                <SuggestedAccounts label="Suggested accounts" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
