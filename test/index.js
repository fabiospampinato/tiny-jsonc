
/* IMPORT */

import _ from 'lodash';
import {describe} from 'fava';
import JSONC from '../dist/index.js';
import Fixtures from './fixtures.js';

/* MAIN */

describe ( 'Tiny JSONC', it => {

  it ( 'supports strings with comments and trailing commas', t => {

    const {input, output} = Fixtures.parse;

    t.deepEqual ( JSONC.parse ( input ), output );

  });

  it ( 'throws on invalid input', t => {

    const {prefix, suffix} = Fixtures.errors;

    t.throws ( () => JSONC.parse ( prefix ), { instanceOf: SyntaxError, message: 'Unexpected token i in JSON at position 0' } );
    t.throws ( () => JSONC.parse ( suffix ), { instanceOf: SyntaxError, message: 'Unexpected token i in JSON at position 4' } );

  });

  it ( 'throws on insufficient input', t => {

    const {comment, empty} = Fixtures.errors;

    t.throws ( () => JSONC.parse ( comment ), { instanceOf: SyntaxError, message: 'Unexpected end of JSON input' } );
    t.throws ( () => JSONC.parse ( empty ), { instanceOf: SyntaxError, message: 'Unexpected end of JSON input' } );

  });

  it ( 'throws on multi-line strings', t => {

    const {multiLineString} = Fixtures.errors;

    t.throws ( () => JSONC.parse ( multiLineString ), { instanceOf: SyntaxError, message: 'Unexpected token \n in JSON at position 12' } );

  });

});
