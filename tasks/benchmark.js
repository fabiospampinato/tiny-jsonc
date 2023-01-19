
/* IMPORT */

import benchmark from 'benchloop';
import JSON5 from 'json5';
import VSCJSONC from 'jsonc-parser';
import JSONCSP from 'jsonc-simple-parser';
import fs from 'node:fs';
import path from 'node:path';
import JSONC from '../dist/index.js';

const sampleInvalidPath = path.resolve ( process.cwd (), 'tasks', 'sample_invalid.json' );
const sampleInvalid = fs.readFileSync ( sampleInvalidPath, 'utf8' );
const sampleWithCommentsPath = path.resolve ( process.cwd (), 'tasks', 'sample_with_comments.json' );
const sampleWithComments = fs.readFileSync ( sampleWithCommentsPath, 'utf8' );
const sampleWithoutCommentsPath = path.resolve ( process.cwd (), 'tasks', 'sample_without_comments.json' );
const sampleWithoutComments = fs.readFileSync ( sampleWithoutCommentsPath, 'utf8' );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 7,
  log: 'compact'
});

benchmark.group ( 'Invalid', () => {

  benchmark ({
    name: 'JSONC.parse',
    fn: () => {
      try {
        JSONC.parse ( sampleInvalid );
      } catch {}
    }
  });

  benchmark ({
    name: 'JSONC.parse (Simple)',
    fn: () => {
      try {
        JSONCSP.parse ( sampleInvalid );
      } catch {}
    }
  });

  benchmark ({
    name: 'JSONC.parse (VSC)',
    fn: () => {
      try {
        VSCJSONC.parse ( sampleInvalid );
      } catch {}
    }
  });

  benchmark ({
    name: 'JSON5.parse',
    fn: () => {
      try {
        JSON5.parse ( sampleInvalid );
      } catch {}
    }
  });

});

benchmark.group ( 'With Comments', () => {

  benchmark ({
    name: 'JSONC.parse',
    fn: () => {
      JSONC.parse ( sampleWithComments );
    }
  });

  benchmark ({
    name: 'JSONC.parse (Simple)',
    fn: () => {
      try {
        JSONCSP.parse ( sampleWithComments );
      } catch {}
    }
  });

  benchmark ({
    name: 'JSONC.parse (VSC)',
    fn: () => {
      VSCJSONC.parse ( sampleWithComments );
    }
  });

  benchmark ({
    name: 'JSON5.parse',
    fn: () => {
      JSON5.parse ( sampleWithComments );
    }
  });

});

benchmark.group ( 'Without Comments', () => {

  benchmark ({
    name: 'JSONC.parse',
    fn: () => {
      JSONC.parse ( sampleWithoutComments );
    }
  });

  benchmark ({
    name: 'JSONC.parse (Simple)',
    fn: () => {
      try {
        JSONCSP.parse ( sampleWithoutComments );
      } catch {}
    }
  });

  benchmark ({
    name: 'JSONC.parse (VSC)',
    fn: () => {
      VSCJSONC.parse ( sampleWithoutComments );
    }
  });

  benchmark ({
    name: 'JSON5.parse',
    fn: () => {
      JSON5.parse ( sampleWithoutComments );
    }
  });

  benchmark ({
    name: 'JSON.parse',
    fn: () => {
      JSON.parse ( sampleWithoutComments );
    }
  });

});
