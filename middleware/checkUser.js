const passport =require("../config/passport")

passport.authenticate('jwt', { session: false }, async (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }})(req,res);
    
module.exports = {passport}