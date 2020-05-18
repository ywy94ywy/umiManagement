/**
 * @module TreeBase(antd-Tree)
 * @description 为基础菜单添加右键菜单功能
 * @todo 优化菜单公用一个div
 */
import React, { useRef, useState, useEffect } from 'react';
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
  const [contextMenu, setContextMenu] = useState<React.ReactNode>(null);
  const [wrapperStyle, setWrapperStyle] = useState<React.CSSProperties>({
    top: '0',
    left: '0',
    visibility: 'hidden',
  });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (menuRef.current) {
        const fn = (e: Event) => {
          if (
            menuRef &&
            menuRef.current !== null &&
            !menuRef.current.contains(e.target as Node)
          ) {
            setWrapperStyle({ top: '0', left: '0', visibility: 'hidden' });
          }
        };
        document.body.addEventListener('click', fn);
        return () => document.body.removeEventListener('click', fn);
      }
    } catch (err) {
      console.log(err, '树组件右键菜单隐藏失败');
    }
  }, [contextMenu]);

  return (
    <>
      <AntdTree
        height={height}
        style={{ height, ...style }}
        showLine={true}
        className={classNames('hide-file-icon', className)}
        onRightClick={({ event, node }) => {
          if (onRightClick) {
            const menu = onRightClick({ event, node });
            try {
              if (menu) {
                setWrapperStyle({
                  left: event.pageX + 'px',
                  top: event.pageY + 'px',
                  visibility: 'visible',
                });
                setContextMenu(menu);
              }
            } catch (err) {
              console.log(err, '树组件右键菜单展示错误');
            }
          }
        }}
        defaultExpandAll
        {...props}
      />
      {contextMenu && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            ...wrapperStyle,
            zIndex: 1000,
            boxShadow:
              '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
          }}
        >
          {contextMenu}
        </div>
      )}
    </>
  );
};

export default TreeBase;
