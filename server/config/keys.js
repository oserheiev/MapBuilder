dbPassword =  'mongodb+srv://test:'+ encodeURIComponent('test') + '@registermongocluster-alcgv.mongodb.net/test?retryWrites=true';

module.exports = {
  mongoURI: dbPassword
};
