var fs = require('fs');

var fil = fs.readFileSync(process.argv[2], 'UTF-8');
var tekst = fil.toString();

var count = 0;
for (var char of tekst) {
    if (char.match('\n')) {
        count++        
    }
}


console.log(count)
