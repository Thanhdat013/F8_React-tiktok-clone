import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://chungcupicityhighpark.com/wp-content/uploads/2022/10/avatar-anime-nu-1.jpg"
          alt="Avatar"
        />
        <Button className={cx('follow-btn')} primary>
          Flow me
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong> Ktd</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Thanh Dat</p>
      </div>
      <p className={cx('analytics')}>
        <strong className={cx('value')}>8.2M </strong>
        <span className={cx('label')}>Follower </span>
        <strong className={cx('value')}>12M </strong>
        <span className={cx('label')}>Likes </span>
      </p>
    </div>
  );
}

export default AccountPreview;
