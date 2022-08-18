import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const handleGetApp = () => {};
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Button onClick={handleGetApp} rounded small className={cx('get-app')}>
                Get app
            </Button>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
