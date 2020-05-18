/**
 * @module 用户头像更换
 * @todo 模态框细节
 */
import React, { useState, useRef } from 'react';
import { ButtonModal } from 'lanlinker';
import { Avatar, Upload, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { blobToDataURL } from '@/utils';
import styles from './style.less';

export default ({ disabled = false }) => {
  const [profileBase64, setProfileBase64] = useState('');
  const [rotate, setRotate] = useState(0);
  const rotateInput = useRef();
  const newStyle = {
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div className={styles.user}>
      <Avatar
        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        size={150}
      ></Avatar>
      <ButtonModal
        buttonProps={{
          text: '更换头像',
          icon: <UploadOutlined />,
          disabled,
          className: styles.uploadBtn,
        }}
        onOk={() => {
          console.log(213);
        }}
        title="更换头像"
        wrapClassName={styles.uploadProfileModal}
        width={730}
        bodyStyle={{ padding: '20px 95px' }}
      >
        <p>原图片</p>
        <div className={styles.original}>
          <div className={styles.profileImg}>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
              alt=""
            />
          </div>
          <Button type="primary" className={styles.downloadBtn}>
            下载原图
          </Button>
        </div>
        <br />
        <p>新图片</p>
        <div className={styles.new}>
          <div>
            <div className={styles.profileImg}>
              <img src={profileBase64} alt="" style={newStyle} />
            </div>
            <p>原图片</p>
          </div>
          <div>
            <Upload
              showUploadList={false}
              beforeUpload={file => {
                blobToDataURL(file, base64 => {
                  setProfileBase64(base64);
                });
                return false;
              }}
            >
              <Button type="primary" className={styles.uploadBtn}>
                选择本地图片
              </Button>
            </Upload>
            <div className={styles.square}>
              <img src={profileBase64} alt="" style={newStyle} />
            </div>
            <p>方形缩略图</p>
          </div>
          <div>
            <div className={styles.circle}>
              <img src={profileBase64} alt="" style={newStyle} />
            </div>
            <p>圆形缩略图</p>
          </div>
        </div>
        <div className={styles.footer}>
          <Button
            type="primary"
            onClick={() => {
              setRotate(0);
            }}
          >
            复位
          </Button>
          <Button
            type="primary"
            onClick={() => {
              const deg = Number(rotate);
              if (deg >= 0) {
                setRotate('-' + deg);
              } else {
                setRotate(Math.abs(deg));
              }
            }}
          >
            换向
          </Button>
          <Input maxLength={4} style={{ width: 50 }} ref={rotateInput}></Input>
          <span>角度</span>
          <Button
            type="primary"
            onClick={() => {
              setRotate(rotateInput.current.state.value);
            }}
          >
            旋转
          </Button>
        </div>
        <br />
      </ButtonModal>
    </div>
  );
};
