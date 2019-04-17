const request = require('request');
request(
  {
    url: 'https://tuoitre.vn',
    gzip: true
  },
  (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  }
);
