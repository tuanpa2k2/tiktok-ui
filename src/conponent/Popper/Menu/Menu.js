import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

import { Wrapper as PopperWrapper } from '~/conponent/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {}; //function trống để event onChange ko bị lỗi

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; //lay phan tu cuoi cua mang

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // !! là dấu NOT. convert sang kiểu Boodlean (Nếu có thì trả về TRUE)

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]); // pust them cai moi vao mang
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1)); // Hàm khi move ra ngoài menu cấp 2, tự động move vào sẽ về cấp 1
    };

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            offset={[12, 8]} //chieu ngang - chieu cao
            delay={[0, 800]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
