
var fs = require ( 'fs')
// create a function around the fs.readFile to be able to cal it in the app
function readJSON ( filename, callback  ) {
	fs.readFile ( filename , function ( err , filedata ) {
		if (err) {
			console.log( "We have a problem broski :" + err )
		}
		var jsondata = JSON.parse( filedata )
// to test if the parsing worked 
		// console.log(jsondata) 
// with the callback function I make the variable jsondata available outside the function
		callback(jsondata)
})
}
// Make the readJSON function readable outside the module with .export
module.exports.readJSON = readJSON
// Finally, it should call the callback function and pass the parsed JSON to it.