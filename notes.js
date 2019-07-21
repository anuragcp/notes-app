const fs = require("fs")

const addNote = function(title, body){
	const note = loadNote();
	console.log("loaded note : "+ note);
	note.push({
		title : title,
		body : body
	});
	saveNote(note)
}

const loadNote = function(){
	try {
		const noteJSON = fs.readFileSync("notes.json")
		noteJSON = noteJSON.toString()
		console.log(noteJSON)
		return JSON.parse(noteJSON)
	} catch(e) {
		return []
	}
}

const saveNote = function(note){
	note = JSON.stringify(note)
	fs.writeFileSync("notes.json", note)
}

module.exports = {
	addNote : addNote
}