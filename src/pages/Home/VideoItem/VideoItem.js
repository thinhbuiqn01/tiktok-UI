import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import { MusicIcon } from '~/components/Icons';
import config from '~/config';
import styles from './VideoItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function VideoItem({ className }) {
    return (
        <div className={cx('recommend__list')}>
            <div className={cx('avatar')}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6ae2b0d5129c22fc8d7799d6951bbf29~c5_100x100.jpeg?x-expires=1660237200&x-signature=glz%2FrFSrcXiHqQWcy1UIIaKV%2F2I%3D"
                    alt="avatar"
                    className={cx('avatar-img')}
                />
            </div>
            <div className={cx('container')}>
                <div className={cx('container-header')}>
                    <Link to={config.routes.profile}>
                        <div className={cx('header-author')}>
                            <h3 className={cx('header-title')}>utnhi_mino_official</h3>
                            <h4 className={cx('header-nickname')}>Út Nhị Mino</h4>
                            <Button primary small className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                    </Link>
                    <div className={cx('video-desc')}>
                        <span className={cx('desc-title')}>
                            Tình yêu không ép buộc, người ta không yêu bạn, bạn chỉ có thể ở đó đau lòng...
                        </span>
                        <span className={cx('desc-tag')}>
                            <Link to={config.routes.profile}>#utnhi_mino_official</Link>
                        </span>
                        <span className={cx('desc-tag')}>
                            <Link to={config.routes.profile}>#popsww</Link>
                        </span>
                        <span className={cx('desc-tag')}>
                            <Link to={config.routes.profile}>#utnhicover</Link>
                        </span>
                        <span className={cx('desc-tag')}>
                            <Link to={config.routes.profile}>#mientay</Link>
                        </span>
                    </div>
                    <div className={cx('video-music')}>
                        <Link to={config.routes.profile}>
                            <MusicIcon />
                            <span className={cx('music-title')}> Nhạc nền span - út nhị mino</span>
                        </Link>
                    </div>
                </div>
                {/* tach doan nay */}
                <div className={cx('content')}>
                    <div className={cx('feed-video')}>
                        <video src="" className={cx('content-src')} controls></video>
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('action-like')}>Like</div>
                        <div className={cx('action-comment')}>Comment</div>
                        <div className={cx('action-share')}>Share</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
