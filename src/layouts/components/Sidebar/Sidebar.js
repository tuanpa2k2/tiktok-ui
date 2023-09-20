import { useEffect, useState } from 'react';
import className from 'classnames/bind';

import config from '~/config';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/conponent/Icons';
import SuggestedAccounts from '~/conponent/SuggestedAccounts';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = className.bind(styles);

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    // const debouncedValue = useDebounce(suggestedUser, 1000);

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5`)
            .then((res) => res.json()) // Chuyển đổi chuỗi JSON sang Object
            .then((res) => {
                setSuggestedUser(res.data);
            }) // Nhận dữ liệu kiểu JavaScript Object
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Đang theo dõi" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Khám phá" to={config.routes.detect} icon={<LiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
            <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
        </aside>
    );
}

export default Sidebar;
