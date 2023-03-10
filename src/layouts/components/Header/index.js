import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';

import {
  UploadIcon,
  MessageIcon,
  InboxIcon,
  ViewProfile,
  GetCoins,
  Setting,
  CurrentLanguage,
  Feedback,
  Keyboard,
  DarkMode,
  LogOut,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <CurrentLanguage />,
    title: 'English',
    children: {
      title: 'Languages ',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: '',
          title: 'العربية',
        },
        {
          type: 'language',
          code: '',
          title: 'বাঙ্গালি (ভারত)',
        },
        {
          type: 'language',
          code: 'Pilipinas',
          title: 'Cebuano (Pilipinas)',
        },
        {
          type: 'language',
          code: 'Česká republika',
          title: 'Čeština (Česká)',
        },
        {
          type: 'language',
          code: 'Deutsch',
          title: 'Deutsch',
        },
        {
          type: 'language',
          code: 'Ελλάδα',
          title: 'Ελληνικά (Ελλάδα)',
        },
        {
          type: 'language',
          code: 'Español',
          title: 'Español',
        },
        {
          type: 'language',
          code: 'Suomi',
          title: 'Suomi (Suomi)',
        },
        {
          type: 'language',
          code: 'Pilipinas',
          title: 'Filipino (Pilipinas)',
        },
        {
          type: 'language',
          code: 'Français',
          title: 'Français',
        },
        {
          type: 'language',
          code: 'ישראל',
          title: 'עברית (ישראל)',
        },
        {
          type: 'language',
          code: 'हिंदी',
          title: 'हिंदी',
        },
        {
          type: 'language',
          code: 'Italia',
          title: 'Italiano (Italia)',
        },
        {
          type: 'language',
          code: '日本語',
          title: '日本語',
        },
        {
          type: 'language',
          code: 'កម្ពុជា',
          title: 'ខ្មែរ (កម្ពុជា)',
        },
        {
          type: 'language',
          code: '대한민국',
          title: '한국어 (대한민국)',
        },
        {
          type: 'language',
          code: 'Malaysian',
          title: ' Melayu (Malaysia)',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'မြန်မာ',
          title: 'မြန်မာ (မြန်မာ)',
        },
        {
          type: 'language',
          code: 'Nederland',
          title: 'Nederlands (Nederland)',
        },
        {
          type: 'language',
          code: 'Polska',
          title: 'Polski (Polska)',
        },
        {
          type: 'language',
          code: 'Brasil',
          title: 'Português (Brasil)',
        },
        {
          type: 'language',
          code: 'Romania',
          title: 'Română (Romania)',
        },
        {
          type: 'language',
          code: 'Россия',
          title: 'Русский (Россия)',
        },
        {
          type: 'language',
          code: 'Türkiye',
          title: 'Türkçe (Türkiye)',
        },
        {
          type: 'language',
          code: 'Україна',
          title: 'Українська (Україна)',
        },
        {
          type: 'language',
          code: '繁體中文',
          title: '繁體中文',
        },
      ],
    },
  },
  {
    icon: <Feedback />,
    title: 'Feedback and help?',
    to: '/feedback',
  },
  {
    icon: <Keyboard />,
    title: 'Keyboard shortcut',
  },
];

function Header() {
  const currentUser = true;

  // Logic Handle

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle logic
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <ViewProfile />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <GetCoins />,
      title: 'Get Coins',
      to: '/coins',
    },
    {
      icon: <Setting />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <DarkMode />,
      title: 'DarkMode',
      to: '/darkMode',
    },
    {
      icon: <LogOut />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          {' '}
          <img src={images.logo} alt="Logo Tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
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
                src="https://cdn.alongwalker.co/info/wp-content/uploads/2022/11/16190620/image-99-hinh-avatar-cute-ngau-ca-tinh-de-thuong-nhat-cho-nam-nu-178699bcb1cf6d58f3f17d3a1ee26472.jpg"
                className={cx('user-avatar')}
                alt="use-avatar"
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
