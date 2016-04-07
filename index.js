var request = require("request");
var urls = require("./urls.json");
var bodyString = urls.urlsArray.length+"\n"+urls.urlsArray.join("\n");
var options = { method: 'POST',
  url: 'https://sb-ssl.google.com/safebrowsing/api/lookup',
  qs:
   { client: 'akashClient',
     key: 'YOUR_API_KEY',
     appver: '1.5.2',
     pver: '3.1' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'text/plain',
     authorization: 'Basic c3dlNjQyOmFrYXNoYmFidQ==' },
     body: bodyString };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(response.statusCode);
  console.log(body);
});
