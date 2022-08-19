import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <h3 className={cx('nick-name')}>{data.nickName}</h3>
                <h4 className={cx('name')}>{data.name}</h4>
            </div>
        </div>
    );
}

export default Title;
