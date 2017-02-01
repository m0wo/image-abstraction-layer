const imagesClient = require('google-images');
const config = require('../../config/').googleImages;

function initImage (app) {
  app.get('/', (req, res) => {
    res.send("Hello World");
  });

  app.get('/image/:terms', (req, res) => {
    let client = new imagesClient(config.id, config.key);
    client.search(req.params.terms)
    .then(function(images){
      res.send(images);
    });
  });
}

module.exports = initImage;
