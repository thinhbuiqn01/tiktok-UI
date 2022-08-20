import classNames from 'classnames/bind';
import styles from './AddFile.module.scss';
import Input from '../Input';

const cx = classNames.bind(styles);

function AddFile({ caption, cover, select }) {
    const option = {
        caption,
        cover,
        select,
    };
    return (
        <div className={cx('wrapper')}>
            <Input option={option.select} />
            <div>
                <Input option={option.caption} />
                <Input option={option.cover} />
            </div>
        </div>
    );
}

export default AddFile;
