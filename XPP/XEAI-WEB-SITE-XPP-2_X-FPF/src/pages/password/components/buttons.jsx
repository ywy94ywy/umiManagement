import { Button } from 'antd';

export const Prev = ({ ...props }) => (
  <Button type="primary" {...props}>
    上一步
  </Button>
);

export const Next = ({ ...props }) => (
  <Button type="primary" {...props}>
    下一步
  </Button>
);
