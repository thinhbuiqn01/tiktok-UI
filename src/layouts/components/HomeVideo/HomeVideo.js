import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './HomeVideo.module.scss';
import * as videoService from '~/services/videoService';
import VideoItem from '~/components/VideoItem/VideoItem';

const cx = classNames.bind(styles);

function HomeVideo() {
    const [videoForYou, setVideoForYou] = useState([]);
    useEffect(() => {
        videoService
            .getVideoForYou({ type: 'for-you', page: 1 })
            .then((data) => {
                setVideoForYou(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {videoForYou?.map((result, index) => (
                <VideoItem data={result} key={index} />
            ))}
        </div>
    );
}

export default HomeVideo;
