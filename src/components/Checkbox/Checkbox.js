import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';
const cx = classNames.bind(styles);
function Checkbox({ data }) {
    return (
        <div className={cx('container')}>
            {data}
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
        </div>
    );
}

export default Checkbox;
