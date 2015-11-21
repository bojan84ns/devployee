module.exports = function(Period) {
	Period.search = function(msg, cb) {
      cb(null, 'Greetings... ' + msg);
    }
     
    Period.remoteMethod(
        'search', 
        {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string'}
        }
    );

};
