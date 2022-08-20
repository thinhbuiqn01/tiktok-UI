import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ label }) {
    return (
        <div className={cx('account-item')}>
            <Image alt="" src="linksai" className={cx('avatar')} />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>milkteacoffee</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                </p>
                <p className={cx('name')}>MilkTea And Coffee</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    label: PropTypes.string.isRequired,
};

export default AccountItem;
