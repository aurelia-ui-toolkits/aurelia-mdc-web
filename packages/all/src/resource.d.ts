declare module '*.html?raw' {
  import { IContainer } from '@aurelia/kernel';
  import { IBindableDescription } from '@aurelia/runtime';
  export const name: string;
  export const template: string;
  export default template;
  export const dependencies: string[];
  export const containerless: boolean | undefined;
  export const bindables: Record<string, IBindableDescription>;
  export const shadowOptions: { mode: 'open' | 'closed'} | undefined;
  export function register(container: IContainer);
}

declare module '*.css' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.scss' {
  const value: Record<string, string>;
  export default value;
}
