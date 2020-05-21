import React, { useState } from 'react';
import { Input } from 'antd';

type liEvent = React.MouseEvent<HTMLLIElement, MouseEvent>;
interface TreeContextMenuProps {
  createClick?: (e: liEvent) => void;
  reNameClick?: (e: liEvent) => void;
  moveClick?: (e: liEvent) => void;
  removeClick?: (e: liEvent) => void;
  moveUpClick?: (e: liEvent, step: string) => void;
  moveDownClick?: (e: liEvent, step: string) => void;
  closeOnClick: () => void;
}

interface IContextMenu
  extends React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  > {
  Item: React.FC<
    React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >
  >;
}

const TreeContextMenu: React.FC<TreeContextMenuProps> = ({
  createClick,
  reNameClick,
  moveClick,
  removeClick,
  moveUpClick,
  moveDownClick,
  closeOnClick,
}) => {
  const [upStep, setUpStep] = useState('1');
  const [downStep, setDownStep] = useState('1');

  return (
    <ContextMenu>
      {createClick && (
        <ContextMenu.Item
          onClick={e => {
            createClick(e);
            closeOnClick?.();
          }}
        >
          新增
        </ContextMenu.Item>
      )}
      {reNameClick && (
        <ContextMenu.Item
          onClick={e => {
            reNameClick(e);
            closeOnClick?.();
          }}
        >
          重命名
        </ContextMenu.Item>
      )}
      {moveClick && (
        <ContextMenu.Item
          onClick={e => {
            moveClick(e);
            closeOnClick?.();
          }}
        >
          移动
        </ContextMenu.Item>
      )}
      {removeClick && (
        <ContextMenu.Item
          onClick={e => {
            removeClick(e);
            closeOnClick?.();
          }}
        >
          删除
        </ContextMenu.Item>
      )}
      {moveUpClick && (
        <ContextMenu.Item
          onClick={e => {
            moveUpClick(e, upStep);
            closeOnClick?.();
          }}
        >
          排序上移&nbsp;
          <Input
            value={upStep}
            style={{ maxWidth: 30, padding: '0 5px' }}
            maxLength={2}
            defaultValue={1}
            onClick={e => {
              e.stopPropagation();
            }}
            onChange={e => {
              setUpStep(e.target.value.replace(/\D/g, ''));
            }}
          />
          &nbsp;步
        </ContextMenu.Item>
      )}
      {moveDownClick && (
        <ContextMenu.Item
          onClick={e => {
            moveDownClick(e, downStep);
            closeOnClick?.();
          }}
        >
          排序下移&nbsp;
          <Input
            value={downStep}
            style={{ maxWidth: 30, padding: '0 5px' }}
            maxLength={2}
            defaultValue={1}
            onClick={e => {
              e.stopPropagation();
            }}
            onChange={e => {
              setDownStep(e.target.value.replace(/\D/g, ''));
            }}
          />
          &nbsp;步
        </ContextMenu.Item>
      )}
    </ContextMenu>
  );
};

const ContextMenu: IContextMenu = ({ children, ...props }) => {
  return (
    <ul
      className="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical"
      {...props}
    >
      {children}
    </ul>
  );
};

ContextMenu.Item = ({ children, ...props }) => {
  return (
    <li
      className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
      {...props}
    >
      {children}
    </li>
  );
};

export default TreeContextMenu;
