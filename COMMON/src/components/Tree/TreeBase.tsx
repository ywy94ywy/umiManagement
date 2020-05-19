/**
 * @module TreeBase(antd-Tree)
 * @description 为基础菜单添加右键菜单功能
 * @todo 提供关闭回调
 * @todo 优化: 动画效果、body上事件可能过多
 */
import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Tree as AntdTree } from 'antd';
import { TreeProps as AntdTreeProps } from 'antd/es/Tree';
import classNames from 'classnames';
import './style.less';

export interface TreeBaseProps extends Omit<AntdTreeProps, 'onRightClick'> {
  height?: number | undefined;
  onRightClick?: (info: {
    event: React.MouseEvent;
    node: any;
  }) => React.ReactNode | void;
}

const TreeBase: React.FC<TreeBaseProps> = ({
  height,
  style,
  className,
  onRightClick,
  ...props
}) => {
  const [menuInfo, setMenuInfo] = useState<{
    menu?: React.ReactNode;
    position?: {
      top: number;
      left: number;
    };
  }>({});
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: Event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        wrapperRef.current.style.display = 'none';
      }
    };
    document.body.addEventListener('click', fn);
    document.body.addEventListener('contextmenu', fn);
    window.addEventListener('scroll', fn);

    return () => {
      document.body.removeEventListener('click', fn);
      document.body.removeEventListener('contextmenu', fn);
      window.removeEventListener('scroll', fn);
    };
  }, []);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.display = 'block';
    }
  }, [menuInfo]);

  return (
    <>
      <AntdTree
        height={height}
        style={{ height, ...style }}
        showLine={true}
        className={classNames('hide-file-icon', className)}
        onRightClick={({ event, node }) => {
          const { pageX, pageY } = event;

          if (onRightClick) {
            const menu = onRightClick({ event, node });
            try {
              menu &&
                setMenuInfo({
                  menu,
                  position: {
                    left: pageX,
                    top: pageY,
                  },
                });
            } catch (err) {
              console.log(err, '树组件右键菜单展示错误');
            }
          }
        }}
        defaultExpandAll
        {...props}
      />
      {menuInfo.menu &&
        createPortal(
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: menuInfo.position?.left,
                top: menuInfo.position?.top,
                zIndex: 1000,
                boxShadow:
                  '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
              }}
              ref={wrapperRef}
            >
              {menuInfo.menu}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default TreeBase;
