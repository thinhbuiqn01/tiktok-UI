import classNames from 'classnames/bind';
import styles from './Description.module.scss';

const cx = classNames.bind(styles);
function Description({ data }) {
    return (
        <div className={cx('description')}>
            <p>{data.description}</p>
        </div>
    );
}

export default Description;
