import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ head, deps, className, ...prop }) {
    return (
        <div className={className}>
            <h2 className={cx('head')}>{head}</h2>
            <span className={cx('deps')}>{deps}</span>
        </div>
    );
}

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
};
export default Title;
