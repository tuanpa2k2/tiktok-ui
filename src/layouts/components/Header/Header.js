import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import { InboxIcon, MessageIcon, UploadIcon } from '~/conponent/Icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

import config from '~/config';
import Button from '~/conponent/Button';
import Menu from '~/conponent/Popper/Menu';
import Image from '~/conponent/Image';
import Search from '~/layouts/components/Search/index';
// import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Languages',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'kore',
                    title: 'Hàn Quốc',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'kore',
                    title: 'Hàn Quốc',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true; //Biến user trạng thái login
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/a@gmailll',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get oins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;

            default:
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="titok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload videos" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Chat inboxs" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://www.bing.com/th?id=OIP.MpmYBjrTrzejcslqxlWcTwHaHV&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                // fallback="https://www.bing.com/th?id=OIP.MpmYBjrTrzejcslqxlWcTwHaHV&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
