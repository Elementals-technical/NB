declare module '*.svg' {
  const content: { componentlike: boolean };
  export default content;
}

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

/// <reference types="vite/client" />
