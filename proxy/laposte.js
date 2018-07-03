require('dotenv').config();

const http = require('http');
const https = require('https');

const proxy = require('http-proxy').createProxyServer({
  target: 'https://api.laposte.fr/codedelaroute/v1/',
  agent: https.globalAgent,
  headers: {
    host: 'api.laposte.fr',
  },
});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Okapi-Key', process.env.LAPOSTE_API_KEY);
  proxyReq.setHeader('Etg-Uuid', process.env.LAPOSTE_ETG_UUID);
});

proxy.listen(5051);
