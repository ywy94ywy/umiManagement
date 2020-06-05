/**
 * @module 工程名称
 */
import { useState } from 'react';
import { Modal } from 'lanlinker';
import { List, Card } from 'antd';

const imgList = [
  'https://picsum.photos/3600/2400?random=1',
  'https://picsum.photos/360/240?random=2',
  'https://picsum.photos/3600/2400?random=3',
  'https://picsum.photos/3600/2400?random=4',
];

export default () => {
  const [imageModal, setImageModal] = useState({
    visible: false,
    info: '',
  });

  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={imgList}
        style={{ height: 700, overflow: 'auto' }}
        renderItem={item => (
          <List.Item>
            <Card
              bodyStyle={{ padding: 0 }}
              hoverable
              onClick={() => {
                setImageModal({
                  visible: true,
                  info: item,
                });
              }}
            >
              <img
                src={item}
                alt="工程图片"
                style={{ width: '100%', maxHeight: '360px' }}
              />
            </Card>
          </List.Item>
        )}
      />
      <Modal
        title="效果大图"
        visible={imageModal.visible}
        width={840}
        footer={null}
        onCancel={() => setImageModal({ ...imageModal, visible: false })}
      >
        <img
          src={imageModal.info}
          style={{
            maxWidth: 790,
            maxHeight: 630,
            margin: '0 auto',
            display: 'block',
          }}
        ></img>
      </Modal>
    </>
  );
};
