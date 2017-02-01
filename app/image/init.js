function initImage (app) {
  app.get('/', (req, res) => {
    res.send("Hello World");
  });

  app.get('/image/:terms', (req, res) => {
    res.send(req.params);
  });
}

module.exports = initImage
