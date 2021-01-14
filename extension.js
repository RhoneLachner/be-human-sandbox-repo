// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { start } = require('repl');
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const startTime = new Date();
	console.log(startTime);

	const localTime = startTime.toLocaleTimeString();
	console.log(localTime);


	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "be-human-sandbox" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json


	let disposable = vscode.commands.registerCommand('be-human-sandbox.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(`YO YO YO YOUR TIME IS ${localTime} YO YO!`);

		setInterval(async() => {
			const endTime = new Date();
			const timeMinutes = Math.round((endTime - startTime ) / 1000 / 60);
			const timeSeconds = Math.round((endTime - startTime ) / 1000);
			vscode.window.showInformationMessage(`YOUR TIME ONLINE IS ${timeMinutes} MINUTES!`);

			const reply = await vscode.window.showInformationMessage(`YOUR TIME ONLINE IS ${timeSeconds} SECONDS!\n`, 'Move your body here', 'LINK', 'bye');

			if (reply === 'Move your body here') {
				vscode.window.showInformationMessage('Great! Do this ........'), { modal: false};
			} else if (reply === 'LINK') {
				vscode.env.openExternal(vscode.Uri.parse('https://www.alchemycodelab.com/'));
			} 
			return;
		}, 3000);
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
