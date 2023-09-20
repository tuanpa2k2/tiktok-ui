import classNames from 'classnames/bind';

import { CiMenuKebab, CiPlay1 } from 'react-icons/ci';
import { IoMdShareAlt, IoIosArrowDropright } from 'react-icons/io';
import { GrUserExpert } from 'react-icons/gr';
import { BiSolidLockAlt } from 'react-icons/bi';

import image from '~/assets/images/dog.jpg';
import Image from '~/conponent/Image';
import Button from '~/conponent/Button';
import video from '~/assets/video/video.mp4';
import video2 from '~/assets/video/video2.mp4';

import styles from './profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('account')}>
                <div className={cx('user-account')}>
                    <div className={cx('action-icon')}>
                        <IoMdShareAlt />
                        <CiMenuKebab />
                    </div>
                    <Image className={cx('image')} src={image} alt="image" />
                    <div className={cx('details')}>
                        <div className={cx('nick-name')}>Lebong95</div>
                        <div className={cx('name')}>Le bong</div>
                        <div className={cx('btn-message')}>
                            <Button className={cx('mes')}>Tin nhắn</Button>
                            <Button className={cx('icon')}>
                                <GrUserExpert />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx('follows')}>
                    <div className={cx('following')}>
                        <p>255</p> Đang Follow
                    </div>
                    <div className={cx('follower')}>
                        <p>9.3M</p> Follower
                    </div>
                    <div className={cx('like')}>
                        <p>222.5M</p> Thích
                    </div>
                </div>
                <div className={cx('user-bio')}>
                    “Cục năng lượng tích cực” 📩lebongofficial@gmail.com “Cục năng lượng tích cực”
                    📩lebongofficial@gmail.com
                </div>
            </div>
            <div className={cx('btn-type')}>
                <Button>Video</Button>
                <Button leftIcon={<BiSolidLockAlt />}>Đã thích</Button>
            </div>
            <div className={cx('lists')}>
                <p>Danh sách phát</p>
                <div className={cx('list-play')}>
                    <div className={cx('container-list')}>
                        <div className={cx('image-list')}>
                            <Image src={image} alt="acbhj" />
                        </div>
                        <div className={cx('kkkkk')}>
                            <div className={cx('title-name')}>Dance and Workout</div>
                            <div className={cx('number-name')}>8 bài đăng</div>
                        </div>
                    </div>
                    <div className={cx('container-list')}>
                        <div className={cx('image-list')}>
                            <Image src={image} alt="acbhj" />
                        </div>
                        <div className={cx('kkkkk')}>
                            <div className={cx('title-name')}>Dance and Workout</div>
                            <div className={cx('number-name')}>8 bài đăng</div>
                        </div>
                    </div>
                    <div className={cx('icon-arow')}>
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
            <p>Video</p>
            <div className={cx('video-c')}>
                <div className={cx('contai-video')}>
                    <div className={cx('bi-play')}>
                        <CiPlay1 />
                        <span>2.4M</span>
                    </div>
                    <div className={cx('video')}>
                        <video src={video} />
                    </div>
                    <div className={cx('name-video')}>Phí Anh Tuấn Thích Lập Trình front-end</div>
                </div>
                <div className={cx('contai-video')}>
                    <div className={cx('bi-play')}>
                        <CiPlay1 />
                        <span>2.4M</span>
                    </div>
                    <div className={cx('video')}>
                        <video src={video2} />
                    </div>
                    <div className={cx('name-video')}>Phí Anh Tuấn</div>
                </div>
                <div className={cx('contai-video')}>
                    <div className={cx('bi-play')}>
                        <CiPlay1 />
                        <span>2.4M</span>
                    </div>
                    <div className={cx('video')}>
                        <video src={video} />
                    </div>
                    <div className={cx('name-video')}>Lập Trình front-end</div>
                </div>
                <div className={cx('contai-video')}>
                    <div className={cx('bi-play')}>
                        <CiPlay1 />
                        <span>2.4M</span>
                    </div>
                    <div className={cx('video')}>
                        <video src={video2} />
                    </div>
                    <div className={cx('name-video')}>Lập Trình</div>
                </div>
                <div className={cx('contai-video')}>
                    <div className={cx('bi-play')}>
                        <CiPlay1 />
                        <span>2.4M</span>
                    </div>
                    <div className={cx('video')}>
                        <video src={video} />
                    </div>
                    <div className={cx('name-video')}>front-end</div>
                </div>
                <div className={cx('contai-video')}>
                    <div className={cx('bi-play')}>
                        <CiPlay1 />
                        <span>2.4M</span>
                    </div>
                    <div className={cx('video')}>
                        <video src={video} />
                    </div>
                    <div className={cx('name-video')}>thích cậu hơi nhiều</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
