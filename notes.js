const fs = require("fs")

const addNote = function(title, body){
	const note = loadNote();
	
	note.push({
		title : title,
		body : body
	});
	saveNote(note)
}

const loadNote = function(){
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const noteJSON = dataBuffer.toString();
		console.log("loaded note : "+ noteJSON);
		return JSON.parse(noteJSON)
	}catch(e) {
		console.log("Still executing here...")
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