# metl-cli
Command line tools for the metl library

## Install

    npm install metl-cli -g

## Commands

    grunt serve // sets up a development server
    
## Config

metl-cli requires a `metl.config.js` file in the root of the project. To see an example, look at the `src/default-config.js`
file.

### Config options:

#### serve

Uses [grunt-http-server](https://github.com/divhide/node-grunt-http-server). See that page for additional options.

 * **host:** The server host name. Defaults to 127.0.0.1. Use 0.0.0.0 for network access
 * **port:** The server port to use
 * **showDir:** DOCTHIS
 * **autoIndex:** DOCTHIS
 * **ext:** Server default file extension. Defaults to "html"
 * **runInBackground:** Run in parallel with other tasks. Defaults to true
 * **logFn:** specify a logger function. 
 * **proxy:** Proxies all requests which can't be resolved locally to the given url. Note this this will disable 'showDir'
 * **openBrowser:** Tell grunt task to open the browser

## Development
This blog was used for reference for setting up Node command line tools: https://developer.atlassian.com/blog/2015/11/scripting-with-node/
