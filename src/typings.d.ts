declare module '*';

declare module '!!file-loader!*' {
  const result: string;

  export = result;
}

declare module '!!raw-loader!*' {
  const result: string;

  export = result;
}

declare module '*.html' {
  const result: string;

  export = result;
}
