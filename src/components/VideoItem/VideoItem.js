import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <Image alt="" src={data.user.avatar} className={cx('avatar-img')} />
            </div>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <h5 className={cx('nick-name')}>{data.user.nickname}</h5>
                    <h6 className={cx('name')}>{data.user.first_name + ' ' + data.user.last_name}</h6>
                </div>
                <p>{data.description}</p>
                <div className={cx('video-show')}>
                    <div className={cx('video')}>
                        <video src={data.file_url} controls className={cx('video-show')} />
                        <div className={cx('action')}>
                            <div className={cx('action-item')}>
                                <div className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                </div>
                                <span className={cx('action-count ')}>{data.likes_count}</span>
                            </div>
                        </div>
                        {!data.user.is_followed ? (
                            <Button primary small className={cx('btn-follow')} children="Follow" />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
