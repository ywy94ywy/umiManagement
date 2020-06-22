import React from 'react';
import { Popconfirm as AntdPopconfirm } from 'antd';
import { PopconfirmProps } from 'antd/es/popconfirm';

// import { ExclamationCircleFilled } from '@ant-design/icons';
// import { ButtonProps } from 'antd/es/button';

const Popconfirm: React.FC<PopconfirmProps> = ({
  children,
  onCancel,
  onConfirm,
  ...props
}: any = {}) => {
  return (
    <AntdPopconfirm
      okText="取消"
      cancelText="确定"
      okButtonProps={{
        type: 'default',
      }}
      cancelButtonProps={{
        type: 'primary',
      }}
      {...props}
      onConfirm={e => {
        onCancel && onCancel(e);
      }}
      onCancel={e => {
        onConfirm && onConfirm(e);
      }}
    >
      {children}
    </AntdPopconfirm>
  );
};

// export interface PopconfirmProps extends AntdPopoverProps {
//   title: React.ReactNode;
//   onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
//   onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
//   okText?: React.ReactNode;
//   cancelText?: React.ReactNode;
//   okButtonProps?: ButtonProps;
//   cancelButtonProps?: ButtonProps;
//   icon?: React.ReactNode;
// }

// const Popconfirm: React.FC<PopconfirmProps> = props => {
//   const [visible, setVisible] = useState<boolean>(false);
//   const {
//     okButtonProps,
//     cancelButtonProps,
//     title,
//     cancelText,
//     okText,
//     icon,
//     ...restProps
//   } = props;

//   const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (props.onConfirm) {
//       props.onConfirm(e);
//     }
//     setVisible(false);
//   };
//   const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (props.onCancel) {
//       props.onCancel(e);
//     }
//     setVisible(false);
//   };

//   const handleVisibleChange = (visible: boolean) => {
//     setVisible(visible);
//   };

//   return (
//     <Popover
//       content={
//         <>
//           <header>
//             {icon}
//             <aside>{title}</aside>
//           </header>
//           <footer>
//             <Button
//               type="primary"
//               onClick={onConfirm}
//               size="small"
//               {...okButtonProps}
//             >
//               {okText}
//             </Button>
//             <Button onClick={onCancel} size="small" {...cancelButtonProps}>
//               {cancelText}
//             </Button>
//           </footer>
//         </>
//       }
//       overlayClassName={styles.popconfirm}
//       trigger="click"
//       placement="topRight"
//       visible={visible}
//       onVisibleChange={handleVisibleChange}
//       {...restProps}
//     >
//       {props.children}
//     </Popover>
//   );
// };

// Popconfirm.defaultProps = {
//   trigger: 'click',
//   okText: '确定',
//   cancelText: '取消',
//   icon: <ExclamationCircleFilled />,
// };

export default Popconfirm;
