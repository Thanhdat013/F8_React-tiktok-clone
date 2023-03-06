import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline = false,
  children,
  small = false,
  large = false,
  text = false,
  round = false,
  disabled = false,
  className,
  leftIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //Remove event listeners when btn disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      // check cho all sự kiện bắt đầu với on
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
    delete props.onClick; // check riêng
  }

  if (to) {
    props.to = to; // đẫn đên link nội bộ trong dự án
    Comp = Link;
  } else if (href) {
    props.href = href; // đẫn đên link bên ngoài dự án
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className, // add class để customer
    primary,
    outline,
    text,
    round,
    disabled,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
