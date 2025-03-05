
const modulewrapper= require('./module-wrapper')

console.log('__filename in index', __filename);
console.log('__dirname in index', __dirname);
const greet= modulewrapper.greet('Abhinov');

