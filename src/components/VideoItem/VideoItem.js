import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image alt="" src={data.user.avatar} className={cx('avatar-img')} />
            <div className={cx('content')}>
                <Link to={'/@' + data.user.nickname} data={data.id}>
                    <div className={cx('info')}>
                        <p className={cx('nick-name')}>
                            <strong>{data.user.nickname}</strong>
                        </p>
                        <p className={cx('name')}>{data.user.first_name + ' ' + data.user.last_name}</p>
                    </div>
                </Link>
                <p>{data.description}</p>
                <h4>BAY LÊN EM EI #1 - ADDY TRAN</h4>
                <div className={cx('video')}>
                    <video src={data.file_url} controls className={cx('video-item')} />
                    <div className={cx('action')}>
                        <div className={cx('action-item')}>
                            {data.allows.map((item, index) => (
                                <div key={index}>
                                    <div className={cx('action-icon')}>
                                        <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                    </div>
                                    <div className={cx('action-count')}>{data.likes_count}</div>
                                </div>
                            ))}
                        </div>
                        <span className={cx('follow')}>
                            {data.user.is_followed ? (
                                <></>
                            ) : (
                                <Button primary small className={cx('btn-follow')} children="Follow" />
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
