const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user');

class UserController {
  postRegister(req, res, next) {
    const { name, email, password } = req.body;
    let errors = [];

    if (!name || !email || !password) {
      errors.push({ msg: 'Please fill all fields' })
    }


    if (password.length < 6) {
      errors.push({ msg: 'Password should be at least 6 characters' })
    }

    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        email,
        password,
      });
    }
    else {
      User.findOne({ email: email })
        .then(user => {
          if (user) {
            errors.push({ msg: 'User already exist' });
            res.render('register', {
              errors,
              name,
              email,
              password,
            });
          }
          else {
            const newUser = new User({
              name,
              email,
              password
            });

            bcrypt.genSalt(12, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                  throw err;
                }
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => {
                    req.flash(
                      'success_msg',
                      'You are now registered and can log in'
                    );
                    res.redirect('/login');
                  })
                  .catch(err => {
                    console.log(err);
                  })
              });
            });
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  postLogin(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  }

  getLogout(req, res, next) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  }
}

module.exports = new UserController();
