import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data?.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <div className={cx('btn-more')}>See all</div>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
