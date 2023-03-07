import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFnc = () => {};
function Menu({ children, items = [], onChange = defaultFnc }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1]; // lấy phần tử cuối mảng bằng cách tính ra index cuối

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; // hai dấu !! để convert giá trị sang kiêu Boolean

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1)); // cắt từ vị trí index[0] đến trước vị trị có index[prev.length - 1] và trả về 1 mảng mới
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
