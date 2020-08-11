/**
 * @module 未申请系统
 */
import { useState } from 'react';
import { Modal } from 'lanlinker';
import { Input, List, message } from 'antd';
import { useRequest } from 'umi';
import { fetchUnapplied, fetchProjects, applyLicense } from './services';
import SystemCard from '@/components/SystemCard';
import styles from './style.less';

export default () => {
  const [filterList, setFilterList] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeItemId, setActiveItemId] = useState();
  const fetchUnappliedRequest = useRequest(fetchUnapplied);
  const fetchProjectsRequest = useRequest(fetchProjects, {
    manual: true,
    onSuccess(res) {
      setFilterList(res);
    },
  });
  const applyLicenseRequest = useRequest(applyLicense, {
    manual: true,
    onSuccess() {
      message.success('申请成功!');
    },
    onError(err) {
      message.error(err.message);
    },
  });

  return (
    <>
      {fetchUnappliedRequest.data &&
        fetchUnappliedRequest.data.map((v, i) => (
          <SystemCard
            title={v.chineseName}
            icon={v.iconUnicode}
            grey
            key={i}
            actions={[
              <a
                onClick={async () => {
                  await fetchProjectsRequest.run(v.id);
                  setModal(true);
                }}
              >
                申请
              </a>,
            ]}
          />
        ))}
      <Modal
        title="请选择未申请的系统"
        visible={modal}
        onOk={async () => {
          if (activeItemId) {
            await applyLicenseRequest.run(activeItemId);
            setModal(false);
          } else {
            message.error('未选择部门');
          }
        }}
        afterClose={() => setActiveItemId(null)}
        className={styles.projectModal}
        onCancel={() => setModal(false)}
      >
        <Input.Search
          placeholder="请输入系统名称关键字"
          onChange={e => {
            if (fetchProjectsRequest.data) {
              const newList = fetchProjectsRequest.data.filter(v =>
                v.name.includes(e.target.value),
              );
              setFilterList(newList);
            }
          }}
        />
        <List
          dataSource={filterList}
          renderItem={item => (
            <List.Item
              onClick={() =>
                activeItemId
                  ? setActiveItemId(null)
                  : setActiveItemId(item.projectId)
              }
              className={activeItemId === item.projectId ? styles.active : ''}
            >
              <List.Item.Meta title={item.name} />
            </List.Item>
          )}
          style={{ height: 350, overflow: 'auto', marginTop: 16 }}
        />
      </Modal>
    </>
  );
};
