const fs = require("fs")

const addNote = function(title, body){
	const note = loadNote();
	console.log("loaded note : "+ note);
	note.push({
		title : note.title,
		body : note.body
	});
	saveNote(note)
}

const loadNote = function(){
	try {
		const noteJSON = fs.readFileSync("notes.json").toString();
		return JSON.parse(noteJSON);
	} catch {
		return [];
	}
}

const saveNote = function(note){
	fs.writeFileSync("notes.json", note)
}

module.exports = {
	addNote : addNote
}