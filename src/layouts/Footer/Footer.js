import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import FooterContentColumns from '~/components/FooterContentColumns';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const [copyright, setCopyright] = useState('');
    useEffect(() => {
        setCopyright('2022 TikTok');
    }, [copyright]);
    const name = ['Company', 'Programs', 'Support', 'Legal'];
    const company = ['About', 'TikTok Browse', 'Newsroom', 'Contact', 'Careers', 'ByteDance'];
    const programs = ['TikTok for Good', 'Advertise', 'Developers', 'TikTok Rewards'];
    const supports = [
        'Help Center',
        'Safety Center',
        'Creator Portal',
        'Community Guidelines',
        'Transparency',
        'Accessibility',
    ];
    const legals = ['Terms of Use', 'Privacy Policy'];

    return (
        <div className={cx('wrapper')}>
            <footer>
                <div className={cx('tiktok-logo')}>
                    <img
                        alt=""
                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
                        className={cx('logo-icon')}
                    />
                    <img
                        alt=""
                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
                        className={cx('logo-text')}
                    />
                </div>
                <FooterContentColumns name={name[0]} children={company} />
                <FooterContentColumns name={name[1]} children={programs} />
                <FooterContentColumns name={name[2]} children={supports} />
                <FooterContentColumns name={name[3]} children={legals} />
            </footer>
            <div className={cx('footer-bottom-wrapper')}>
                <div className={cx('language-selection')}>
                    <p>English</p>
                    <select className={cx('language-selection-form')}>
                        <option value="en">English</option>
                        <option value="vn">Việt Nam</option>
                        <option value="vn">Lào</option>
                        <option value="vn">Thái Lan</option>
                        <option value="vn">Trung Quốc</option>
                    </select>
                </div>

                <div className={cx('copyright')}>
                    <span>&copy;</span>
                    <span>{copyright}</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
