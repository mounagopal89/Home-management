const chokidar = require('chokidar');

chokidar.watch('path/to/your/files', {
  ignored: /.*\.log\.tmp$/,
}).on('all', (event, path) => {
  console.log(event, path);
});