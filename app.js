const yargs = require("yargs")
const notes = require("./notes.js")

yargs.version("1.1.0")

yargs.command({
	command : "add",
	describe : "adding notes the file!...",
	builder : {
		title : {
			describe : "Specifies the file title...",
			demandOption : true,
			type : "string"
		},
		body : {
			describe : "Contains body of the notes!...",
			demandOption : true,
			type : "string"
		}
	},
	handler : function(argv) {
		console.log("Adding note with title "+ argv.title +"and body "+ argv.body);
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command : "remove",
	describe : "Removing specified note from the notes...",
	builder : {
		title : {
			describe : "Specifies the title of the file",
			demandOption : true,
			type : "string"
		},
		body : {
			describe : "Contains the body of the file...",
			demandOption : false,
			type : "string"
		}
	},
	handler : function(argv){
		console.log("This will conplete soon..")
	}
});

yargs.parse()
