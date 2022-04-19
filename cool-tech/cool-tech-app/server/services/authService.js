const bcrypt = require('bcrypt');
const User = require('../models/User');
// const userValidator = require('../validation/userValidation');
const { SALT_ROUNDS } = require('../config/config');

const register = async data => {

    let username = data.username;
    let email = data.email;
    let password = data.password;
    let rePassword = data.rePassword;
    let phone = data.phone;

    if (password != rePassword) {
        console.log(' inn ')
        throw { errors: 'Passwords must match!' };
    }

    const userByUsername = await User.findOne({ username });
    const userByEmail = await User.findOne({ email });

    if (userByUsername) {
        throw { errors: 'There is already registered user with that username' };
    }

    if (userByEmail) {
        throw { errors: 'There is already registered user with that email' };
    }

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hash, phone });

    await newUser.save();

    console.log('new User ' + newUser);
    return { user: newUser };
};

const login = async data => {
    // let email = userValidator.emailValidation(data.email);
    // let password = userValidator.passwordValidation(data.password);
    let username = data.username;
    let password = data.password;

    let errors = 'Invalid username / password!';

    let user = await User.findOne({ username });
    if (!user) throw { errors };

    let passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) throw { errors };


    return { user };
};

const getUserById = async userId => await User.findById(userId);

module.exports = {
    register,
    login,
    getUserById
}