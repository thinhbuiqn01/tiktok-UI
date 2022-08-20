import classNames from 'classnames/bind';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function Action({ data, name, className, icon }) {
    return <div className={cx('action')}></div>;
}

export default Action;
