/**
 * @module 用户头像更换
 * @todo 模态框细节
 */
import { useState, useRef } from 'react';
import { ButtonModal } from 'lanlinker';
import { Avatar, Upload, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { blobToDataURL } from '@/utils';
import styles from './style.less';

export default ({
  source = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  disabled = false,
}) => {
  const [profileBase64, setProfileBase64] = useState(source);
  const [rotate, setRotate] = useState(0);
  const rawPic = useRef();
  const rotateInput = useRef();
  const test = useRef();
  const newStyle = {
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Avatar src={source} size={150} />
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
              <img src={source} alt="原图片" ref={rawPic} />
            </div>
            <Button
              type="primary"
              className={styles.downloadBtn}
              onClick={() => {
                const x = new XMLHttpRequest();
                x.open('GET', source, true);
                x.responseType = 'blob';
                x.onload = () => {
                  const url = window.URL.createObjectURL(x.response);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = '';
                  a.click();
                };
                x.send();
              }}
            >
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
            <Input maxLength={4} style={{ width: 50 }} ref={rotateInput} />
            <span>角度</span>
            <Button
              type="primary"
              onClick={() => {
                const img = new Image();
                img.onload = () => {
                  console.log(img.src);
                  const canvas = document.createElement('canvas');

                  canvas.width = img.width;
                  canvas.height = img.height;
                  const ctx = canvas.getContext('2d');

                  ctx.rotate(Math.PI / 4);
                  ctx.drawImage(img, 0, 0);
                  test.current.append(canvas);
                };
                img.src = profileBase64;
              }}
            >
              旋转
            </Button>
            <div ref={test}></div>
          </div>
          <br />
        </ButtonModal>
      </div>
    </div>
  );
};

function rotateBase64Img(src, edg, callback) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  var imgW; //图片宽度
  var imgH; //图片高度
  var size; //canvas初始大小

  if (edg % 90 != 0) {
    console.error('旋转角度必须是90的倍数!');
    throw '旋转角度必须是90的倍数!';
  }
  edg < 0 && (edg = (edg % 360) + 360);
  const quadrant = (edg / 90) % 4; //旋转象限
  const cutCoor = { sx: 0, sy: 0, ex: 0, ey: 0 }; //裁剪坐标

  var image = new Image();
  image.crossOrigin = 'anonymous';
  image.src = src;

  image.onload = function() {
    imgW = image.width;
    imgH = image.height;
    size = imgW > imgH ? imgW : imgH;

    canvas.width = size * 2;
    canvas.height = size * 2;
    switch (quadrant) {
      case 0:
        cutCoor.sx = size;
        cutCoor.sy = size;
        cutCoor.ex = size + imgW;
        cutCoor.ey = size + imgH;
        break;
      case 1:
        cutCoor.sx = size - imgH;
        cutCoor.sy = size;
        cutCoor.ex = size;
        cutCoor.ey = size + imgW;
        break;
      case 2:
        cutCoor.sx = size - imgW;
        cutCoor.sy = size - imgH;
        cutCoor.ex = size;
        cutCoor.ey = size;
        break;
      case 3:
        cutCoor.sx = size;
        cutCoor.sy = size - imgW;
        cutCoor.ex = size + imgH;
        cutCoor.ey = size + imgW;
        break;
    }

    ctx.translate(size, size);
    ctx.rotate((edg * Math.PI) / 180);
    ctx.drawImage(image, 0, 0);

    var imgData = ctx.getImageData(
      cutCoor.sx,
      cutCoor.sy,
      cutCoor.ex,
      cutCoor.ey,
    );
    if (quadrant % 2 == 0) {
      canvas.width = imgW;
      canvas.height = imgH;
    } else {
      canvas.width = imgH;
      canvas.height = imgW;
    }
    ctx.putImageData(imgData, 0, 0);
    callback(canvas.toDataURL());
  };
}
