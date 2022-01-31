const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
  let token;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {
      var scheme = parts[0],
        credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, { err: 'Format is Authorization: Bearer [token]' });
    }
  }

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err)
      return res.json(401, { status: 1, code: 401, error: 'Invalid Token!' });
    //you will recieve decoded value for which encoding was done on login process.
    //perform db operation if the current user is legal user in the application

    console.log('Decode is ', decoded);
    next();
  });
};
