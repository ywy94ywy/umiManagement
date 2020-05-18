---
group:
  path: /header
  title: 头部工具栏
title: 通知中心
---

```tsx
/**
 * title: 菜单栏
 */
import React, { useState } from 'react';
import { Notification } from 'lanlinker';

export default () => {
  const [messages, setMessages] = useState(fakeMessages);
  const [prompts, setPrompts] = useState(fakePrompts);
  return (
    <div
      style={{
        background: '#1c1f87',
        height: 64,
        lineHeight: '64px',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Notification
        messages={messages}
        prompts={prompts}
        readMessage={item => {
          setMessages(
            messages.map(v => {
              if (v.id !== item.id) {
                return v;
              } else {
                v.readed = true;
                return v;
              }
            }),
          );
        }}
        readPrompt={item => {
          setPrompts(
            prompts.map(v => {
              if (v.id !== item.id) {
                return v;
              } else {
                v.readed = true;
                return v;
              }
            }),
          );
        }}
        clearMessages={() => {
          setMessages([]);
        }}
        clearPrompts={() => {
          setPrompts([]);
        }}
      ></Notification>
    </div>
  );
};

const fakeMessages = [
  {
    id: 1,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    id: 2,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    id: 3,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: true,
  },
  {
    id: 4,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event:
      '多次违反工地规定，拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改',
    time: '5 分钟前',
    readed: true,
  },
];
const fakePrompts = [
  {
    id: 1,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 2,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 3,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 4,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 5,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 6,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: true,
  },
  {
    id: 7,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: true,
  },
];
```
