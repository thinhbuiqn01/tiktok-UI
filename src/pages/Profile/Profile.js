import Button from '~/components/Button';
import Image from '~/components/Image';

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as userService from '~/services/userService';
const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState();
    useEffect(() => {
        userService
            .getUserNickname('@phuoctai91')
            .then((data) => {
                setUser(data);
            })
            .catch((error) => console.log(error));
    }, []);
    const [video, setVideo] = useState([]);
    useEffect(() => {
        setVideo(user?.videos);
    }, [user?.videos]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div>
                    <Image src={user?.avatar} className={cx('avatar')} />
                </div>
                <div>
                    <h2>
                        {`${user?.nickname}`}{' '}
                        <span>{user?.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}</span>
                    </h2>
                    <div>{`${user?.first_name} ${user?.last_name} `}</div>
                    <Button large primary children="Follow" />
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faShare} />
                    <FontAwesomeIcon icon={faShare} />
                </div>
            </div>
            <div className={cx('count-infos')}>
                <div className={cx('count-numbers')}>
                    <strong>{user?.followings_count}</strong>
                    <p>Following</p>
                </div>
                <div className={cx('count-numbers')}>
                    <strong>{user?.followers_count}</strong>
                    <p>Follower</p>
                </div>
                <div className={cx('count-numbers')}>
                    <strong>{user?.likes_count}</strong>
                    <p>Like</p>
                </div>
            </div>
            <div>
                {video?.map((item, index) => (
                    <h2 key={index}>{item.file_url}</h2>
                ))}
            </div>
        </div>
    );
}

export default Profile;
