import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/70f2bb1c86daa3b661af42a6a2f7c644.jpeg?x-expires=1658761200&x-signature=3Bktxa8a3dpm4RlDmOticKyaorw%3D"
                className={cx('avatar')}
                alt="Tony bui"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tony Bui</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Tony bui</span>
            </div>
        </div>
    );
}

export default AccountItem;
