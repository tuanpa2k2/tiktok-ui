import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import classNames from 'classnames/bind';

import video from '~/assets/video/video.mp4';
import Image from '../Image';

import images from '~/assets/images/dog.jpg';
import styles from './cardVideo.module.scss';

const cx = classNames.bind(styles);
const CardVideo = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-c')}>
                <video src={video} />
            </div>
            <div className={cx('title-name')}>
                Nàng thẹn thùng xả nháp chứ idol sún đi chơi chưa về để quay tiktok cùng tuii
            </div>
            <div className={cx('detail')}>
                <div className={cx('account')}>
                    <Image className={cx('avatar')} src={images} alt="image" />
                    <div className={cx('nick-name')}>Tuấn PA</div>
                </div>
                <div className={cx('view')}>
                    <AiTwotoneHeart />
                    <p>321.5K</p>
                </div>
            </div>
        </div>
    );
};

export default CardVideo;
