module.exports = function(Booking) {

	Booking.search = function(startDate, endDate) {
		return Booking.find({
			where: {
				start: {gte: Date(startDate)}, 
				end: {lte: Date(endDate)} 
			}
		});
    }
     
    Booking.remoteMethod(
        'search', 
        {
          accepts: [{arg: 'startDate', type: 'string'}, {arg: 'endDate', type: 'string'}],
		  returns: {arg: 'result', type: 'json'}
        }
    );
};
