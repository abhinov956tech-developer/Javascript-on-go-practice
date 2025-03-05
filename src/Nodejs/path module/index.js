const { log } = require('console');
const path = require('path')

console.log('Directory name:', path.dirname(__filename));
console.log('File name:', path.basename(__filename));

console.log('File extension:',path.extname(__filename));

const joinpath = path.join('/user','document','node','projects');
console.log("Join path:", joinpath);

const resolvepath = path.resolve('user','document','node','projects')
console.log("Resolve path:", resolvepath);

const normalizepath = path.normalize('/user/.document/../node/projects');
console.log("Normalize path:", normalizepath);






