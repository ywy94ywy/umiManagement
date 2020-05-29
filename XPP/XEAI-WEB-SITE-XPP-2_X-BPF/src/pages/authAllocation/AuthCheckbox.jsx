import { useState } from 'react';
import { Checkbox } from 'antd';

const AUTH_LIST = ['增加', '删除', '修改', '查询'];

export default () => {
  const [checkedList, setCheckedList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={e => {
          const checked = e.target.checked;
          setIndeterminate(false);
          setAllChecked(checked);
          setCheckedList(checked ? AUTH_LIST : []);
        }}
        checked={allChecked}
      >
        全选
      </Checkbox>
      <Checkbox.Group
        options={AUTH_LIST}
        value={checkedList}
        onChange={list => {
          setIndeterminate(!!list.length && list.length < AUTH_LIST.length);
          setAllChecked(list.length === AUTH_LIST.length);
          setCheckedList(list);
        }}
      />
    </>
  );
};
