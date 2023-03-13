const pass=require('./pass')
module.exports = {
    pass: 'UdY4PTxt7)!Yn+S(',
    PORT: process.env.PORT || 8000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || pass,
    DB_NAME: process.env.DB_NAME || 'library'
  };
  