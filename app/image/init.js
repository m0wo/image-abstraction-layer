function initImage (app) {
  app.get('/', (req, res) => {
    res.send("Hello World");
  });
}

module.exports = initImage
