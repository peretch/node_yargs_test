const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('create', 'Creates a text file with multiplication table', options)
    .command('list', 'Returns in console multiplication tables', options)
    .help()
    .argv;

module.exports = { argv };