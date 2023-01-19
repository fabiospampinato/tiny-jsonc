
/* MAIN */

const Fixtures = {
  errors: {
    comment: '// asd',
    empty: '',
    prefix: 'invalid 123',
    suffix: '123 invalid',
    multiLineString: `{ "foo": "/*
     */" }`
  },
  parse: {
    input: `
      // Example // Yes
      /* EXAMPLE */ /* YES */
      {
        "one": {},
        "two" :{},
        "three": {
          "one": null,
          "two" :true,
          "three": false,
          "four": "asd\\n\\u0022\\"",
          "five": -123.123e10,
          "six": [ 123, true, [],],
        },
      }
      // Example // Yes
      /* EXAMPLE */ /* YES */
    `,
    output: {
      one: {},
      two: {},
      three: {
        one: null,
        two: true,
        three: false,
        four: "asd\n\u0022\"",
        five: -123.123e10,
        six: [123, true, []]
      }
    }
  }
};

/* EXPORT */

export default Fixtures;
