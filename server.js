// cors-proxy.js
const corsAnywhere = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
    console.log(`CORS Anywhere proxy running at http://${host}:${port}`);
});
