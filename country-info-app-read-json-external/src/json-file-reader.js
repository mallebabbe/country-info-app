
var fs = require ( 'fs')

// take the 3rd argument from the commandline. for example: node app.js Spain
var countryname = process.argv[2]

// create a function around the fs.readFile to call  
function readJSON ( filename, callback ) {
	fs.readFile ( filename , function ( err , filedata ) {
		if (err) {
			console.log( "We have a problem broski :" + err )
		}
		console.log(countryname)
		var jsondata = JSON.parse( filedata )

		jsondata.forEach( function ( country ) {
			if ( country.name == countryname ) {
// possibly client wants to output all the info from a country?
		console.log( "Country: " + country.name )
		console.log( "Top Level Domain: " + country.topLevelDomain ) // tld field is an array and may contain more tld's
	}
})
	})
}



module.exports.readJSON = readJSON


// Finally, it should call the callback function and pass the parsed JSON to it.