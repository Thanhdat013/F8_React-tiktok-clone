import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const defaultFnc = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFnc }) {
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
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1)); // cắt từ vị trí index[0] đến trước vị trị có index[prev.length - 1] và trả về 1 mảng mới
                }}
              />
            )}
            <div className={cx('body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
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
