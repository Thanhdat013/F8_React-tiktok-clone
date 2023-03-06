import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://i.pinimg.com/736x/c0/29/5a/c0295a690ba4e121e0ab092279d8ed6b.jpg"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Thành Đạt</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Thành Đạt</span>
      </div>
    </div>
  );
}

export default AccountItem;
