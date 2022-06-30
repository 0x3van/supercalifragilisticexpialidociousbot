const cat = require('cat-loggr');
const log = new cat();

function mrequire(path) { return require('./modules/' + path) }
log.init("index.js started")

const aifig = { "prompt": "default", "api": "?" } 
const ai = mrequire('ai.js');
const aic = new ai(aifig)
const handler = mrequire('cmd.js');

const utils = mrequire('utils.js');


const discord = require('discord.js'); 
const client = new discord.Client();
client.on('ready', () => {
    log.init("Client logged into " + client.user.tag + " - Prompt: " + aifig.prompt);
    handler.setup("!", aic, client) 
})
client.on('message', handler.handle)
client.login("DISCORD TOKEN HERE")