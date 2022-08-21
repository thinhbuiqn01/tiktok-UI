import classNames from 'classnames/bind';
import styles from './FooterContentColumns.module.scss';

const cx = classNames.bind(styles);
function FooterContentColumns({ name, children }) {
    return (
        <div className={cx('wrapper')}>
            <h4>{name}</h4>
            <ul>
                {children.map((item, index) => (
                    <li key={index}>
                        <a href="/">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterContentColumns;
