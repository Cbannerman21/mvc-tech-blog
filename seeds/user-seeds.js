const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'filounious2',
    email: 'fatsandwhich@weather.com',
    password: 'password123'
  },
  {
    username: 'allensix',
    email: 'palacegrounds@england.com',
    password: 'password123'
  },
  {
    username: 'influeza1783',
    email: 'icantgetno@satisfaction.com',
    password: 'password123'
  },
  {
    username: 'shillings32',
    email: 'highroller@china.com.cn',
    password: 'password123'
  },
  {
    username: 'thegreatbandino',
    email: 'orelsewhat@google.ru',
    password: 'password123'
  },
  {
    username: 'theGR8Cornholio',
    email: 'bevisamdbutthead9@mtv.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;