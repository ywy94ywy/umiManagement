/**
 * @module 已申请系统
 * @todo 进入
 */
import { useModel } from 'umi';
import SystemCard from '@/components/SystemCard';

export default () => {
  const { appliedSystems } = useModel('systems');

  return (
    <>
      {appliedSystems &&
        appliedSystems.map(v => (
          <SystemCard
            title={v.name}
            subtitle={v.subName}
            description={'租户执照编号：' + v.id}
            icon={v.iconUnicode}
            iconBg={v.iconColor}
            data={v}
            key={v.id}
            actions={[<a>进入</a>]}
          />
        ))}
    </>
  );
};
