require('dotenv').config();

const http = require('http');
const https = require('https');

const proxy = require('http-proxy').createProxyServer({
  target: 'https://codengo-uat.bureauveritas.fr',
  agent: https.globalAgent,
  headers: {
    host: 'codengo-uat.bureauveritas.fr'
  }
});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Auth-Driving-School-key', process.env.CODENGO_DRIVING_SCHOOL_KEY);
  proxyReq.setHeader('X-Auth-Partner-key', process.env.CODENGO_PARTNER_KEY);
});

proxy.listen(5050);
