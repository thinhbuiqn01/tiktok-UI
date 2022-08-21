import classNames from 'classnames/bind';
import Select from 'react-select';
import { faAt, faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AddFile.module.scss';
import Button from '../Button';
import { useState } from 'react';
import Checkbox from '../Checkbox';

const cx = classNames.bind(styles);
const selectedOptions = [
    { value: 'public', label: 'Public' },
    { value: 'friend', label: 'Friend' },
    { value: 'private', label: 'Private' },
];

const checkboxOptions = ['Comment', 'Duet', 'Stitch'];

function AddFile() {
    const [selectedOption, setSelectedOption] = useState('Public');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid-4')}>
                <input accept="video/*" className={cx('input-file')} />
                <div className={cx('upload-store')}>
                    <FontAwesomeIcon icon={faCloudUpload} />
                    <div className={cx('text-main')}>
                        <span className={cx('main-span')}> Select video to upload</span>
                    </div>
                    <div className={cx('text-sub')}>
                        <span className={cx('sub-span')}> Or drag and drop a file</span>
                    </div>
                    <div className={cx('text-video-info')}>
                        <li>
                            <span>MP4 or WebM</span>
                        </li>
                        <li>
                            <span>Up to 10 minutes</span>
                        </li>
                        <li>
                            <span>Less than 2 GB</span>
                        </li>
                        <li>
                            <span>720x1280 resolution or higher</span>
                        </li>
                    </div>
                    <div>
                        <Button primary large children="Select file" />
                    </div>
                </div>
            </div>
            <div className={cx('grid-8')}>
                <div className={cx('content-item')}>
                    <div className={cx('bg-caption')}>
                        <div className={cx('title-caption')}>
                            <label>Caption</label>
                            <span className={cx('require-font')}>0/150</span>
                        </div>
                        <div className={cx('caption-content')} type="text">
                            <div className={cx('container-v2')}>
                                <div className={cx('editor')}>
                                    <div className={cx('draft-editor')}>
                                        <input className={cx('input-editor')} />
                                    </div>
                                </div>
                                <div className={cx('icon-style')}>
                                    <FontAwesomeIcon icon={faAt} className={cx('icon-at')} />
                                    <FontAwesomeIcon icon={faAt} className={cx('icon-at')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content-item')}>
                    <label>Cover</label>
                    <div>
                        <div className={cx('bg-container')}>
                            <div className={cx('candidate')}></div>
                        </div>
                    </div>
                </div>
                <div className={cx('content-item')}>
                    <label>Who can view this video</label>
                    <div className={cx('select-option')}>
                        <Select placeholder={selectedOption} onChange={setSelectedOption} options={selectedOptions} />
                    </div>
                </div>
                <div className={cx('content-item')}>
                    <label>Allow users to:</label>
                    <div className={cx('checkbox-option')}>
                        {checkboxOptions.map((item, index) => (
                            <Checkbox data={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFile;
