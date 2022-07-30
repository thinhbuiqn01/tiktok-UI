import classNames from 'classnames/bind';
import styles from './VideoItem';

const cx = classNames.bind(styles);

function VideoItem() {
    return <div className={cx('wrapper')}> Content</div>;
}

export default VideoItem;
