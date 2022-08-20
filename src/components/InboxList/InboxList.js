import classNames from 'classnames/bind';
import styles from './InboxList.module.scss';
import InboxItem from './InboxItem';
const cx = classNames.bind(styles);

function InboxList({ data, children, className }) {
    return (
        <div className={className}>
            <p className={cx('title')}>{children}</p>
            <div className={cx('inbox-list')}>
                <InboxItem data={data} className={cx('inbox-item')} />
                <InboxItem data={data} className={cx('inbox-item')} />
            </div>
        </div>
    );
}

export default InboxList;
