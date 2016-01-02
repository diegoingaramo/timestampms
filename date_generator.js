/**
 * Date conversion methods.
 *
 * @param  {String} unix timestamp or a natural language date
 * @return {String} json object ex. { "unix": 1450137600, "natural": "December 15, 2015" }
 */

var sMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

module.exports = {

  /**
  * Return json object with both dates.
  *
  * @param  {String} aDate containing one of the specific date
  * @return {String} json object ex. { "unix": 1450137600, "natural": "December 15, 2015" }
  */
  getJsonDates: function(aDate) {

  	var json = JSON.stringify({unix: null, natural: null});

  	var naturalTime = new Date(aDate*1000);
  	var unixTime = Date.parse(aDate);

  	if (naturalTime != "Invalid Date"){

	  	naturalTime = sMonths[naturalTime.getMonth()] + " " + (naturalTime.getDate() + 1) + ", " + naturalTime.getFullYear();
	  	unixTime = parseInt(aDate);
	  	json = JSON.stringify({unix: unixTime, natural: naturalTime});

  	} else if (!isNaN(unixTime)){

		unixTime = Date.parse(aDate + " GMT")/1000;
  		naturalTime = aDate;
	  	json = JSON.stringify({unix: unixTime, natural: naturalTime});

  	}

  	return json;
  }

  
};