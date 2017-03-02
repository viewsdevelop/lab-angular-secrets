const LocalStrategy = require("passport-local").Strategy;
const User          = require("../models/user");
const bcrypt        = require("bcrypt");

module.exports = (passport) => {
  passport.use(new LocalStrategy((username, password, next) => {
  }));

  passport.serializeUser((user, cb) => {
  });

  passport.deserializeUser((id, cb) => {
  });
}
