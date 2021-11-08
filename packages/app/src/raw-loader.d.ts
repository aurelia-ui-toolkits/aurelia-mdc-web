declare module '!!raw-loader!*' {
  const contents: string;
  export = contents;
}

declare module '*.raw' {
  const contents: string;
  export = contents;
}
