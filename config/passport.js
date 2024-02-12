const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { secretKey } = require('./secretKey');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
};

passport.use(new JwtStrategy(options, (payload, done) => {
  // Here you would typically query your database to find the user based on the payload information
  const user = { id: payload.sub, username: payload.username };
  
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}));

module.exports = passport;
