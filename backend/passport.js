const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
}); 

passport.use(new GoogleStrategy({
	clientID:"667724243528-7hb35mp3o49u9b0as6vimhc2gaj94q92.apps.googleusercontent.com", // Your Credentials here.
	clientSecret:"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", // Your Credentials here.
	callbackURL:"https://lucky-cheesecake-7d3711.netlify.app/auth/callback",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	return done(null, profile);
}
));
