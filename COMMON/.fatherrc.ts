const options = {
  esm: {
    type: 'rollup',
  },
  doc: { typescript: true },
  cssModules: {
    type: true,
    generateScopedName: '[path]_[local]_[hash:base64:5]',
  },
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};

export default options;
