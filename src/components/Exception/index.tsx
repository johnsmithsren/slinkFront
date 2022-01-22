import React from 'react';
import ClassNames from 'classnames';
import { Button } from 'antd';
import styles from './index.less';
import * as H from 'history';
interface IConfig {
  [key: string]: { img: string; title: string; desc: string };
}
const config: IConfig = {
  '403': {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  '404': {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: '抱歉，你访问的页面不存在',
  },
  '500': {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: '抱歉，服务器出错了',
  },
};

export interface ExceptionProps<
  L = {
    to: H.LocationDescriptor;
    href?: H.LocationDescriptor;
    replace?: boolean;
    innerRef?: (node: HTMLAnchorElement | null) => void;
  },
> {
  className?: string;
  backText?: React.ReactNode | String;
  type: '403' | '404' | '500';
  title?: React.ReactNode;
  desc?: React.ReactNode;
  img?: string;
  actions?: React.ReactNode;
  linkElement?: string | React.ComponentType<L>;
  style?: React.CSSProperties;
  redirect?: string;
}
const Exception = ({
  className = '',
  backText = '',
  img = '',
  type = '404',
  title = '',
  desc = '',
  actions = '',
  linkElement = 'a',
  redirect = '',
}) => {
  const defaultProps = {
    className: '',
    backText: '返回首页',
    redirect: '/',
  };
  const pageType = type in config ? type : '404';

  const cls = ClassNames(styles.exception, className);
  return (
    <>
      <div className={cls}>
        <div className={styles.imgBlock}>
          <div
            className={styles.imgEle}
            style={{
              backgroundImage: `url(${img || config[pageType].img})`,
            }}
          />
        </div>
        <div className={styles.content}>
          <h1>{title || config[pageType].title}</h1>
          <div className={styles.desc}>{desc || config[pageType].desc}</div>
          <div className={styles.actions}>
            {actions ||
              React.createElement(
                linkElement,
                {
                  to: redirect,
                  href: redirect,
                },
                <Button type="primary">{backText}</Button>,
              )}
          </div>
        </div>
      </div>
    </>
  );
};
