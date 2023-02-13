
/* IMPORT */

import benchmark from 'benchloop';
import JSONCSP from 'jsonc-simple-parser';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import JSONC from '../dist/index.js';

/* HELPERS */

const sampleInvalidPath = path.resolve ( process.cwd (), 'tasks', 'sample_invalid.json' );
const sampleInvalid = fs.readFileSync ( sampleInvalidPath, 'utf8' );
const sampleWithCommentsPath = path.resolve ( process.cwd (), 'tasks', 'sample_with_comments.json' );
const sampleWithComments = fs.readFileSync ( sampleWithCommentsPath, 'utf8' );
const sampleWithoutCommentsPath = path.resolve ( process.cwd (), 'tasks', 'sample_without_comments.json' );
const sampleWithoutComments = fs.readFileSync ( sampleWithoutCommentsPath, 'utf8' );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100
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
    name: 'JSON.parse',
    fn: () => {
      JSON.parse ( sampleWithoutComments );
    }
  });

});
