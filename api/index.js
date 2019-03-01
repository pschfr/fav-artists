// Require dependencies
const dotenv = require('dotenv').config();
const LastFM_API = require('lastfmapi');
const LastFM = new LastFM_API({
	'api_key': process.env.LAST_FM_KEY,
	'secret': process.env.LAST_FM_SECRET
});

// Wrapper function to get top artists from LastFM
function LastFM_top_artists(username = 'paul_r_schaefer') {
	LastFM.user.getTopArtists({ user: username }, (err, data) => {
		if (err) console.error(err)
		else {
			// console.log(data['artist']);
			return data;
		}
	});
}

// Exports to Zero
module.exports = (request, response) => {
	response.send({
		response: LastFM_top_artists()
	});
}
