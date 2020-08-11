import alias from '@rollup/plugin-alias';

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
  // extraPlugins: [
  //   alias({
  //     entries: [{ find: 'c', replacement: path.resolve(__dirname, 'src') }],
  //   }),
  // ],
};

export default options;
