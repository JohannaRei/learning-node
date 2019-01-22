const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('@config');

const api = {}

api.login = (User) => (req, res) => {
    User.findOne({ username: req.body.username}, ())
}