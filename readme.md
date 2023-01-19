# Tiny JSONC

An absurdly small JSONC parser.

This library works simply by using regexs to strip out comments first and trailing commas second, in order to account for a trailing comma followed by a comment, and then just passing the output to `JSON.parse`.

If you need additional APIs to manipulate JSONC, better error messages, or a full-blown parser, I'd recommend using [`json-simple-parser`](https://github.com/fabiospampinato/jsonc-simple-parser) instead.

## Install

```sh
npm install --save tiny-jsonc
```

## Usage

```ts
import JSONC from 'tiny-jsonc';

const source = `
  { // This is an example
    "foo": 123,
    /* TRAILING COMMAS */
    "bar": [1, 2, 3,],
  }
`;

const result = {
  foo: 123,
  bar: [1, 2, 3]
};

JSONC.parse ( source ); // => returns an object that's deeply equal to `result`
```

## License

MIT © Fabio Spampinato
