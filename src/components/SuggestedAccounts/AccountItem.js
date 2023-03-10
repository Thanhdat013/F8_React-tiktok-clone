import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview} offset={[-20, 0]}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-anime.jpg"
            alt="Avatar"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong> Ktd</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Thanh Dat</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
