import classNames from 'classnames/bind';
import HomeVideo from '~/layouts/components/HomeVideo';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <HomeVideo />
        </>
    );
}

export default Home;
