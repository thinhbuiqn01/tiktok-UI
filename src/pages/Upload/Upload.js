import classNames from 'classnames/bind';
import AddFile from '~/components/AddFile';
import Title from '~/components/Title';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Title head="Upload Video" deps="Post a video to your account" />
                    <AddFile caption="Caption" cover="Cover" select="Select File" />
                </div>
            </div>
        </div>
    );
}

export default Upload;
