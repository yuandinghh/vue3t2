/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types 2023-3-20 15:59:00
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 环境变量 TypeScript的智能提示 2023-3-20 15:59:00
interface ImportMetaEnv {
	VITE_APP_TITLE: string;
	VITE_APP_PORT: string;
	VITE_APP_BASE_API: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
