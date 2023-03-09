import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import * as searchService from '~/apiServices/searchService';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      // Không có giá trị tìm kiếm và chỉ có dấu space
      return;
    }
    // encodeURIComponent dùng để mã hóa dữ liệu để khi người dùng nhập các ký tự của Query parameter thì sẽ không gây ảnh hưởng khi truyền trên URL

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
  }, [debounced]);
  return (
    <>
      <HeadlessTippy
        interactive={true}
        visible={showResult && searchResult.length > 0}
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={(e) => {
              if (e.target.value.startsWith(' ')) {
                return;
              } else {
                setSearchValue(e.target.value);
              }
            }}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {!!loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button className={cx('search-btn')}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </>
  );
}

export default Search;
