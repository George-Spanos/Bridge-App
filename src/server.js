const express = require('express');
const path = require('path');
const http = require('http');
const api = require("./server/routes/api.js");
var bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const randomEl = require('mongoose-simple-random');
mongoose.connect('mongodb://GeorgeSp:6979658539@ds111124.mlab.com:11124/bridge-app');
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
let bidsArray;
const Schema = mongoose.Schema;
// Make a schema for the stored bids.
const auctionSchema = new Schema({
  array: [],
  hcp: Number,
  numericBid: String,
  suitBid: String,
  comments: String,
  votes: Number,
})
const practiceSchema = new Schema({
  array: [],
  hcp: Number,
  numericBid: String,
  suitBid: String,
  comments: String,
})
const leadsSchema = new Schema({
  colors: Object,
  comments: String,
  lead: Object,
  hand: [],
  NorthBid: [],
  EastBid: [],
  SouthBid: [],
  WestBid: [],
  answer: []
})
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  leadsVoted: [],
  bidsVoted: [],
  premium: Boolean,
  rank: String,
  donationammount: Number,
  img: String,
  description: String
});
auctionSchema.plugin(randomEl);
leadsSchema.plugin(randomEl);
practiceSchema.plugin(randomEl);
const User = mongoose.model('Users', userSchema);
const leadPractice = mongoose.model('LeadPractice', leadsSchema);
const practiceBids = mongoose.model('Practice Bids', practiceSchema);
const Bid = mongoose.model('Bid', auctionSchema);
app.post('/addlead', function (req, res, next) {
  var lead = leadPractice({
    colors: req.body.colors,
    comments: req.body.comments,
    lead: req.body.lead,
    hand: req.body.hand,
    NorthBid: req.body.North,
    EastBid: req.body.East,
    SouthBid: req.body.South,
    WestBid: req.body.West,
    answer: []
  });
  lead.save(
    function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          err: error
        });
      }
      res.status(201).json({
        message: 'Saved data',
        obj: result
      });
    }
  );
});
app.post('/addauction', function (req, res, next) {
  var bid = Bid({
    array: req.body.hand,
    hcp: req.body.hcp,
    numericBid: req.body.numbid,
    suitBid: req.body.suit,
    comments: req.body.comment,
    votes: 0
  });
  bid.save(
    function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          err: error
        });
      }
      res.status(201).json({
        message: 'Saved data',
        obj: result
      });
    }
  );
});
app.post('/addpracticebid', function (req, res, next) {
  var practiceBid = practiceBids({
    array: req.body.hand,
    hcp: req.body.hcp,
    numericBid: req.body.numbid,
    suitBid: req.body.suit,
    comments: req.body.comment
  });
  practiceBid.save(
    function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          err: error
        });
      }
      res.status(201).json({
        message: 'Saved data',
        obj: result
      });
    }
  );
});
// Get a random hand, and find all hands that are the same with the random one.
app.get('/randomhand', function (req, res, next) {
  Bid.findOneRandom(function (err, result) {
    if (err) {
      return err;
    }
    this.bidsArray = result.array;
    Bid.find({
        array: this.bidsArray
      }, {
        hcp: 1,
        comments: 1,
        numericBid: 1,
        suitBid: 1,
        array: 1,
        votes: 1
      },
      function (err, arrayFin) {
        res.status(200).json({
          title: ' Success',
          result: arrayFin
        });
      }
    );
  });
});
app.get('/getpracticehand', function (req, res, next) {
  practiceBids.findOneRandom({}, {
    _id: 0,
    __v: 0
  }, function (err, result) {
    if (err) {
      return err;
    }
    res.status(200).json({
      title: ' Success',
      result: result
    });
  });
});
app.get('/getrandomleadpractice', function (req, res, next) {
  leadPractice.findOneRandom({}, {
    __v: 0
  }, function (err, result) {
    if (err) {
      return err;
    }
    res.status(200).json({
      title: 'Success',
      result: result
    });
  });
});
app.post('/postleadanswer', function (req, res, next) {
  leadPractice.findOne({
    _id: req.body.id
  }, function (err, lead) {
    if (err) {
      throw err;
    }
    lead.answer.push(req.body.answer);
    lead.save(
      function (err) {
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            err: error
          });
        }
      }
    );
  });
});
app.post('/bidvote', function (req, res, next) {
  Bid.findOne({
    _id: req.body.id
  }, function (err, bid) {
    if (err) {
      throw err;
    }
    if (req.body.value === 1) {
      bid.votes += 1;
    } else if (req.body.value === -1) {
      bid.votes -= 1;
    }
    bid.save(
      function (err) {
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            err: error
          });
        }
      }
    );
  });
});
app.post('/leadvote', function (req, res, next) {
  leadPractice.findOne({
    _id: req.body.id
  }, function (err, lead) {
    if (err) {
      throw err;
    }
    if (req.body.value === 1) {
      lead.answer[req.body.index].votes += 1;
    } else if (req.body.value === -1) {
      lead.answer[req.body.index].votes -= 1;
    }
    const ans = lead.answer;
    leadPractice.update({
      _id: req.body.id
    }, {
      $set: {
        answer: ans
      }
    }, function (err, result) {
      if (err) {
        throw err;
      }
    });
  })
})
app.post('/register', function (req, res, next) {
  User.findOne({
    username: req.body.username
  }, function (err, result) {
    if (result === null) {
      var user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        premium: false,
        leadsVoted: [],
        bidsVoted: [],
        rank: 'Begginer',
        donationammount: 0
      })
      user.save(
        function (err, result) {
          if (err) {
            return res.status(500).json({
              title: 'An error occured',
              err: error
            })
          }
          res.status(200).json({
            title: 'A user was created!',
            result: false
          });
        }
      );
    } else {
      res.status(200).json({
        title: 'Username already exists!',
        result: true
      });
    }
  })
})
app.post('/login', function (req, res, next) {
  User.findOne({
    username: req.body.username
  }, function (err, result) {
    if (result === null) {
      res.status(200).json({
        title: "Username doesn't exist",
        result: {
          valid: false
        }
      })
    } else if (result.password === req.body.password) {
      res.status(200).json({
        title: 'Correct credentials for' + req.body.username,
        result: {
          valid: true,
          img: result.img,
          desc: result.description,
          rank: result.rank,
          username: result.username,
          premium: result.premium
        }
      })
    } else {
      res.status(200).json({
        title: 'Incorrect password for user ' + req.body.username,
        result: {
          valid: false
        }
      })
    }
  })
})
app.post('/changeDesc', function (req, res, next) {
  User.findOne({
    username: req.body.username
  }, function (err, result) {
    if (!err) {
      result.description = req.body.value;
      result.save(
        (err, response) => {
          if (err) {
            return res.status(500).json({
              title: 'An error occured',
              err: error
            })
          } else {
            return res.status(200).json({
              title: 'A description for the user ' + result.username + ' was updated',
              result: 'Sucess'
            })
          }
        }
      );
    }
  })
})
app.post('/changeImg', function (req, res, next) {
  User.findOne({
    username: req.body.username
  }, function (err, result) {
    if (!err) {
      result.img = req.body.value;
      result.save(
        (err, response) => {
          if (err) {
            return res.status(500).json({
              title: 'An error occured',
              err: error
            })
          } else {
            return res.status(200).json({
              title: 'Profile Image for the user ' + result.username + ' was updated',
              result: 'Sucess'
            })
          }
        }
      );
    }
  })
})
/**
 * Create HTTP server.
 */
// User.update({}, { $set:
// { description: 'Please fill out your description'} }, { multi: true }, () => console.log('done'));
// leadPractice.update({}, {
//   $set: {
//     answer: []
//   }
// },
//   { multi: true }, () => console.log('done'));
const server = http.createServer(app);

// Set our api routes
app.use('/api', api);
// Catch all other routes and return the index file
app.get('**', (req, res) => {
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
server.listen(port, () => console.log(`API running on port:${port}`));
