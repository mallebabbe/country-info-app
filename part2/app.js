// met de coutryreader variable zorg je dat de module json-file-reader in de app geinclude wordt 
var jsonREADER = require ( './src/json-file-reader')

var countryname = process.argv[2]

// here we call the countryreader and use the module.export.readJSON in the json-file-reader.js 
jsonREADER.readJSON ( './src/countries.json', function( jsondata ){
// now we console log the answer of the function 
	// console.log("We have " + jsondata)

	jsondata.forEach( function ( country ) {

	if ( country.name == countryname ) {
// possibly client wants to output all the info from a country?
		console.log( "Country: " + country.name )
		console.log( "Top Level Domain: " + country.topLevelDomain ) // tld field is an array and may contain more tld's
	}
})
})

// excersis:

// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.json
// In een nieuw venster bekijken
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>

// Part 2
// - create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. 
// It should then read that file, then parse the JSON. 

// Finally, it should call the callback function and pass the parsed JSON to it.

// - One way to think of this module is as a helper that can read and parse any JSON file. 
// It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, 
// except that this function only works with JSON files.

// Hints:
// - Use JSON.parse (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse (Links to an external site.)) to parse JSON data from files into a JavaScript object.
// - Try first completing the assignment without creating a separate module - Extracting the second module out is significantly more difficult.
