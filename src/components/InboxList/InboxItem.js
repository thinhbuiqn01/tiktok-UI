import Image from '../Image';
import classNames from 'classnames/bind';
import styles from './InboxList.module.scss';
const cx = classNames.bind(styles);
function InboxItem({ data, className }) {
    return (
        <div className={className}>
            <Image alt="" src="linksai" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>_tony.bui_</h4>
                <span className={cx('time-follow')}>Follows you. 3d ago</span>
            </div>
        </div>
    );
}

export default InboxItem;
