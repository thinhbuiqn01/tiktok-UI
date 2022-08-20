import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './HomeVideo.module.scss';
import Title from './Title';
import Video from './Video';
import Button from '~/components/Button';
import Description from './Description';

const cx = classNames.bind(styles);

function HomeVideo() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/video')
            .then((res) => res.json())
            .then((res) => {
                // handle success@@
                setResult(res);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
        return;
    }, []);

    return (
        <div className={cx('wrapper')}>
            {result?.map((result, index) => (
                <div className={cx('recommend__list')} key={index}>
                    <div className={cx('avatar')}>
                        <img alt="" src={result.avatar} className={cx('avatar-img')} />
                    </div>
                    <div className={cx('content')}>
                        <Title data={result} className={cx('title')} />
                        <Description data={result} />
                        <div className={cx('video-show')}>
                            <div className={cx('video')}>
                                <Video data={result} />
                                <div className={cx('action')}>
                                    <div className={cx('action-item')}>
                                        <div className={cx('action-icon')}>
                                            <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                        </div>
                                        <span className={cx('action-count ')}>{result.countLike}</span>
                                    </div>
                                    <div className={cx('action-item')}>
                                        <div className={cx('action-icon')}>
                                            <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                        </div>
                                        <span className={cx('action-count')}> {result.countComment}</span>
                                    </div>
                                    <div className={cx('action-item')}>
                                        <div className={cx('action-icon')}>
                                            <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                                        </div>
                                        <span className={cx('action-count')}> {result.countShare}</span>
                                    </div>
                                </div>
                                <Button primary small className={cx('btn-follow')}>
                                    Follow
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeVideo;
