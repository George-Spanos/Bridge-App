const express = require('express');
const path = require('path');
const http = require('http');
const api=require("./server/routes/api.js");
const app = express();
const mongoose = require ('mongoose');
mongoose.connect('mongodb://GeorgeSp:6979658539@ds111124.mlab.com:11124/bridge-app')
app.use(express.static(path.join(__dirname, 'dist')));

const Schema =mongoose.Schema;

const auctionSchema = new Schema ({
  array: [],
  hcp: Number,
  numericBid: Number,
  suitBid: String,
  comments: String
})
const Bid = mongoose.model('Bid',auctionSchema);
app.post('/addauction', function (req, res ,next) {
     console.log(req);
  var bid = Bid({
      array: req.body.hand,
      hcp: req.body.hcp,
      numbericBid: req.body.numBid,
      suitBid: req.body.suit,
      comments: req.body.comment
    });
    bid.save(
      function(err, result) {
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            err: error
          })
        }
        res.status(201).json({
          message: 'Saved data',
          obj: result
        });
      }
    );
});
/**
 * Create HTTP server.
 */

const server = http.createServer(app);

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
