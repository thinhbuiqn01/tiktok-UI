import classNames from 'classnames/bind';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video({ data }) {
    return (
        <div className={cx('wrapper')}>
            <video src={data.video} controls className={cx('video-show')} />
        </div>
    );
}

export default Video;
