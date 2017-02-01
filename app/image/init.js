const config = require('../../config/').googleImages;
const request = require('request');

function initImage (app) {
  app.get('/', (req, res) => {
    res.send("Hello World");
  });

  app.get('/image/:terms', (req, res) => {
    var searchUrl = 'https://www.googleapis.com/customsearch/v1?searchType=image&q='
    + req.params.terms
    + '&cx=' + config.id
    + '&key=' + config.key;

    request(searchUrl, (err, _res, body) => {
      body = JSON.parse(body);

      res.send(
        body.items.map((item) => {
        return {
          imageUrl: item.link,
          pageUrl: item.image.contextLink,
          altText: item.title
          };
        }));
      });
    });
}

module.exports = initImage;
