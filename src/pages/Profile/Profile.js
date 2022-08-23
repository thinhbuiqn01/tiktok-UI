import Button from '~/components/Button';
import Image from '~/components/Image';

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div>
                    <Image className={cx('avatar')} />
                </div>
                <div>
                    <div className={cx('nickname')}>
                        <h2>annhien_boiboi</h2>
                        <span>tichxanh</span>
                    </div>
                    <h4>An Nhiên ♥ Bối Bối</h4>
                    <Button large primary children="Follow" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faShare} />
                    <FontAwesomeIcon icon={faShare} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
