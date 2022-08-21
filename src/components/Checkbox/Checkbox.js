import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Checkbox.module.scss';
const cx = classNames.bind(styles);

function Checkbox({ data, type }) {
    const [isChecked, setIsChecked] = useState(false);
    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
    };
    return (
        <div className={cx('container')}>
            <input type={type} className={cx('checkbox')} onChange={handleChecked} checked={isChecked} />
            <span className={cx('title')}>{data}</span>
        </div>
    );
}

export default Checkbox;
