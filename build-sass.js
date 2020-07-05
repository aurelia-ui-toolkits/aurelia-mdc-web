const path = require('path');
const sass = require('sass');
const fs = require('fs');

const result = sass.renderSync({
  file: process.argv[2],
  outFile: process.argv[3],
  includePaths: [path.resolve('../../node_modules/')]
});

fs.writeFileSync(process.argv[3], result.css);
