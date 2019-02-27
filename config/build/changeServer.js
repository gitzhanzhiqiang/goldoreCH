let base = require('./base');
var argument = process.argv.splice(2);

if (argument[0] === 'testServer') {
    base('http://192.168.0.15:9999/');
} else if (argument[0] === 'devServer'){
    base('http://192.168.0.15:9999/')
} else if (argument[0] === 'production'){
    base('https://www.jcs188.com/hjjr/')
}


