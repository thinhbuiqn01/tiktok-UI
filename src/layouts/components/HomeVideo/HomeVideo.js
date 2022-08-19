import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeVideo.module.scss';
import Image from '~/components/Image';
import Title from './Title';
import Video from './Video';
import Action from './Action';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function HomeVideo() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        /* [
                {
                "name": "Thịnh JS1",
                "avatar": "avatar"
                },
                {
                "name": "Thịnh JS2",
                "avatar": "avatar"
                },
                {
                "name": "Thịnh JS3",
                "avatar": "avatar"
                }
            ]
         */
        fetch('http://127.0.0.1:8000/video')
            .then((res) => res.json())
            .then((res) => {
                const data = res;
                console.log(data);
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
                    <Button primary small className={cx('btn-follow')}>
                        Follow
                    </Button>
                    <div className={cx('avatar')}>
                        <img alt="" src={result.avatar} className={cx('avatar-img')} />
                    </div>
                    <div className={cx('content')}>
                        <Title data={result} className={cx('title')} />
                        <div className={cx('video')}>
                            <Video data={result} />
                        </div>
                        <div className={cx('action')}>
                            <Action data={result} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeVideo;
