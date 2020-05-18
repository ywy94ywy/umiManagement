import React, { useState } from 'react';
import { Select, Form, Input } from 'antd';

const { Option } = Select;

const QUESTIONS = [
  '您母亲的生日是?(YYYYMMDD)',
  '您父亲的生日是?(YYYYMMDD)',
  '您配偶的生日是?(YYYYMMDD)',
  '您母亲的姓名是?',
  '您父亲的姓名是?',
  '您配偶的姓名是?',
  '您的学号是?',
  '您的工号是?',
  '您小学班主任的名字是?',
  '您初中班主任的名字是?',
  '您高中班主任的名字是?',
  '您大学班主任的名字是?',
  '您最熟悉的童年好友的名字是?',
  '您最熟悉的学校舍友姓名是?',
];

const QuestionSelect = ({ questions = [], number = 0, selected = [], setSelected }) => (
  <Select
    defaultValue={questions[number]}
    onSelect={key => {
      setSelected(value => {
        const next = [...value];
        next[number] = key;
        return next;
      });
    }}
  >
    {questions.map(v => (
      <Option value={v} key={v} disabled={selected.includes(v)}>
        {v}
      </Option>
    ))}
  </Select>
);

const SecretFormItem = () => {
  const [selected, setSelected] = useState([QUESTIONS[0], QUESTIONS[1], QUESTIONS[2]]);

  return (
    <>
      <Form.Item name="b1" label="密保问题01">
        <QuestionSelect
          questions={QUESTIONS}
          number={0}
          selected={selected}
          setSelected={setSelected}
        ></QuestionSelect>
      </Form.Item>
      <Form.Item name="b2" label="密保答案01">
        <Input placeholder="请输入密保答案"></Input>
      </Form.Item>
      <Form.Item name="c1" label="密保问题02">
        <QuestionSelect
          questions={QUESTIONS}
          number={1}
          selected={selected}
          setSelected={setSelected}
        ></QuestionSelect>
      </Form.Item>
      <Form.Item name="c2" label="密保答案02">
        <Input placeholder="请输入密保答案"></Input>
      </Form.Item>
      <Form.Item name="d1" label="密保问题03">
        <QuestionSelect
          questions={QUESTIONS}
          number={2}
          selected={selected}
          setSelected={setSelected}
        ></QuestionSelect>
      </Form.Item>
      <Form.Item name="d2" label="密保答案03">
        <Input placeholder="请输入密保答案"></Input>
      </Form.Item>
    </>
  );
};

export default SecretFormItem;
