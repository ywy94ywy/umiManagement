import React, { useState, useEffect, forwardRef } from 'react';
import { Tag } from 'antd';
import styles from './style.less';

const { CheckableTag } = Tag;

const CheckableList = forwardRef(({ data = [], single = false }, ref) => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    if (ref) ref.current = selected;
  }, [selected]);

  return data.length > 0 ? (
    <div className={styles.checkableList}>
      <CheckableTag
        key={'ALL_SELECTED'}
        checked={selected.length === 0}
        className={styles.tag}
        onChange={() => setSelected([])}
      >
        全部
      </CheckableTag>
      {data.map((tag, i) => {
        return (
          <CheckableTag
            key={tag}
            checked={selected.includes(tag)}
            className={styles.tag}
            onChange={checked => {
              if (single) {
                setSelected(checked ? [tag] : []);
              } else {
                handleChange(tag, checked, selected, setSelected);
              }
            }}
          >
            {tag}
          </CheckableTag>
        );
      })}
    </div>
  ) : null;
});

const handleChange = (tag, checked, state, setState) => {
  const nextState = checked ? [...state, tag] : state.filter(v => v !== tag);
  setState([...new Set(nextState)]);
};

export default CheckableList;
