declare module '*.svg' {
  const content: { componentlike: boolean };
  export default content;
}

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: any;
  export default value;
}
/// <reference types="vite/client" />
