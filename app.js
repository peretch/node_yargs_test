const { argv } = require('./config/yargs');
const colors = require('colors');

const { createFile, listTable } = require('./multiply/multiply');

const command = argv._[0];

switch(command){
    case 'list':
        listTable(argv.base, argv.limit);
        console.log('list command');
    break;
    
    case 'create':
        createFile(argv.base, argv.limit)
            .then( file => console.log(`File creted ${file}`.green))
            .catch( e => console.log(e));
    break;

    default:
        console.log('command not found');
}
