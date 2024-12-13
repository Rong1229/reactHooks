import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'My Monorepo',
  },
  resolve: {
    docDirs: ['docs'], // 文档目录
    atomDirs: [
      { type: 'hooks', dir: 'packages/hooks/src' }, // hooks路径
    ],
  },
  base: '/',               // 基础路径
  publicPath: '/',         
});