const https = require('https');
const options = {
  hostname: 'mp3.zing.vn',
  port: 443,
  path: '',
  method: 'GET'
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`); // console.log(res);

  res.on('data', d => {
    console.log('PART', d.toString('utf8'));
  });
});

req.on('error', error => {
  console.error(error);
});
