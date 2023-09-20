import classNames from 'classnames/bind';
import { BsFillMicFill, BsCarFrontFill, BsFillBagCheckFill } from 'react-icons/bs';
import { MdSportsBasketball } from 'react-icons/md';

import styles from './detect.module.scss';
import Button from '~/conponent/Button';
import CardVideo from '~/conponent/CardVideo';
const cx = classNames.bind(styles);

function Detect() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('type')}>
                <Button leftIcon={<BsFillMicFill />}>Khiêu vũ và nhạc</Button>
                <Button leftIcon={<MdSportsBasketball />}>Thể thao</Button>
                <Button leftIcon={<BsCarFrontFill />}>Xe hơi</Button>
                <Button leftIcon={<BsFillBagCheckFill />}>Thời trang</Button>
            </div>
            <div className={cx('cart-video')}>
                <CardVideo />
                <CardVideo />
                <CardVideo />
                <CardVideo />
                <CardVideo />
            </div>
        </div>
    );
}

export default Detect;
