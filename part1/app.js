var countryname = process.argv[2] // jsonfile is case sensitive! Maybe handle this?

var fs = require ( 'fs' )

/////////////////////////////////////////
// Global decleration stuff
////////////////////////////////////////

/////////////////////////////////////
// function that reads the json file 
/////////////////////////////////////

fs.readFile( './countries.json', function ( err , data ) {
// make sure err is visible in console
	if ( err ) {
		console.log( "Something is wrong " + err )
		throw err
	}
	
// store my file data in parse.jason
	var jsondata = JSON.parse( data )

// shows the complete list
// console.log( jsondata )

// loop through the json file and prints the country and top level domain
jsondata.forEach( function ( country ) {
	if ( country.name == countryname ) {
// possibly client wants to output all the info from a country?
		console.log( "Country: " + country.name )
		console.log( "Top Level Domain: " + country.topLevelDomain ) // tld field is an array and may contain more tld's
		console.log( "Capital: " + country.capital)
	}
} )

} )

