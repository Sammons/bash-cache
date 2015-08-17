#!/usr/bin/env node
var module = require("./index");
var argv = require("optimist")
.usage("Usage: $0 -c <command> \t\t# to display annotations for the command \n" +
	"Usage: $0 -c <command> -s <annotation> # save an annotation\n" +
	"Usage: $0 -c <command> -d \t\t# to delete all annotations for a command\n" +
	"Usage: $0 <command> \t\t\t# to display annotations for the command, same as -c\n")
.options({
	"c" : {
		default : ""
	},
	"s" : {
	},
	"d" : {
		default : false
	},
	"h" : {
		default : false
	}
})
.describe({
	"s" : "text to annotate with",
	"d" : "clear cache for command",
	"c" : "the command",
	"h" : "show help"
})
.boolean(["d", "h"])
.argv;

if (argv.d && argv.c) {
	module.clear(argv);
} else if (argv.d && argv.s) {
	console.log("-s and -d cannot be used together");
} else if (argv.d && argv._.length == 0) {
	console.log("please specify a command to delete the cache for with -c");
} else if (argv.d && argv._.length > 1)  {
	console.log("two commands before the -d flag!?");
} else if (argv.s && argv._.length == 0 && !argv.c) {
	console.log(argv)
	console.log("please specify a command to save the cache for with -c");
} else if (argv.s && argv._.length > 1) {
	console.log("two commands before the -s flag!?");
} else if (argv.s === true) {
	console.log("please specify some text after the -s flag")
} else if (argv.d) {
	module.clear(argv);
} else if (argv.s) {
	module.save(argv);
} else if (argv.h) {
	showHelp();
} else if (argv.c || argv._.length == 1) {
	if (!argv.c) argv.c = argv._[0];
	module.display(argv)
} else {
	console.log("bash-cache needs some input, try -h to get help.")
}

function showHelp () {
	require("optimist").showHelp();
}
