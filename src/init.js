var
    prompt = require('prompt'),
    PROJECT = 'project name',
    GRUNT = 'create gruntFile? (y/n)',
    LESS = 'Use less? (y/n)',
    SERVER = 'Server port (0 for no server)';


console.log('This will walk you through the process of setting up a metl project');
prompt.start();


prompt.get([PROJECT, GRUNT, LESS, SERVER], function (err, result) {
    if (err) { return onErr(err); }
    console.log(PROJECT, result[PROJECT]);
    console.log(GRUNT,  result[GRUNT]);
    console.log(LESS, result[LESS]);
    console.log(SERVER, result[SERVER]);
});

function onErr(err) {
    console.log(err);
    return 1;
}