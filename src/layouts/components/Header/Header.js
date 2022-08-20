import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import images from '~/asset/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import config from '~/config';
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import FillItem from '~/components/FillItem';
import Notify from '~/components/Notify';
import InboxList from '~/components/InboxList/InboxList';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case menuItem.type:
                break;

            default:
                break;
        }
    };
    const [hidden, setHidden] = useState(false);
    let style = {};
    const handleShowNotify = () => {
        setHidden(true);
        if (hidden === false) {
            style = {
                display: 'hidden',
            };
        }
    };

    const itemNotify = ['All Activity', 'Likes', 'Comments', 'Mentions and tag', 'Follower'];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <Link to={config.routes.upload}>
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faPlus} className={cx('upload')} />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')} onClick={handleShowNotify}>
                                    <FontAwesomeIcon icon={faMessage} className={cx('btn-inbox')} />
                                    <div className={cx('view-inbox')} style={style}>
                                        <Notify className={cx('notify')} children="Notifications" />
                                        <div className={cx('group-item')}>
                                            {itemNotify.map((item, index) => (
                                                <FillItem children={item} className={cx('span-item')} key={index} />
                                            ))}
                                        </div>
                                        <div className={cx('inbox-member')}>
                                            <InboxList children="This week" className={cx('inbox')} />
                                            <InboxList children="Previous" className={cx('inbox')} />
                                        </div>
                                    </div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src=""
                                alt="Nguyen Van A"
                                fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
