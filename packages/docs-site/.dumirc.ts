import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'My Monorepo',
  },
  resolve: {
    docDirs: ['docs'], // 文档目录
    atomDirs: [
      { type: 'hooks', dir: '../hooks/src' }, // hooks路径
    ],
  },
});
