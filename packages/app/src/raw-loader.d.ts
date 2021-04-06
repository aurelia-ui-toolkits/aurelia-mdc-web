declare module '!!raw-loader!*' {
  const contents: string;
  export = contents;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
