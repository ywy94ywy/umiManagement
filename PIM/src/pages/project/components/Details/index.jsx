/**
 * @module 详情信息
 */

import Engineering from './Engineering';
import Project from './Project';

export default ({ tabKeyList, detailKeyList, detailType }) => {
  const { node, type } = detailType;
  const t = type.join('');

  return (
    <>
      {t === tabKeyList[0] + detailKeyList[0] && <Project node={node} />}
      {t === tabKeyList[0] + detailKeyList[1] && <Engineering node={node} />}
      {t === tabKeyList[1] + detailKeyList[0] && (
        <Project node={node} readOnly />
      )}
      {t === tabKeyList[1] + detailKeyList[1] && (
        <Engineering node={node} readOnly />
      )}
    </>
  );
};
