# RemoteAccessToolV3: Asynchronous Node.js Client
This is the asynchronous Node.js client for the RemoteAccessToolV2 project, which allows a user to remotely issue commands to a server through the client. The client uses the Fetch API, through the `node-fetch` package, to send HTTP requests to the server and handle the responses. 

## Functionality
The client allows the user to specify a sequence of commands to issue to the server, which will then be run asynchronously. The available commands are:
- `screenshot`: takes a screenshot of the main screen on the server and saves it to the `screenshots` directory with a unique filename based on the current date and time.
- `processes`: records a list of all processes running on the server and saves it to the `processes` directory with a unique filename based on the current date and time.
- `reboot`: reboots the server.

## How to Run
To run the client, you will need to have Node.js installed and navigate to the `src/consumers/js` directory. Make sure to install the necessary dependencies by running `npm install` in the directory. Then, start the client using `node index.js`. The client will attempt to connect to `http://localhost:8080/` by default, but you can change the URL to that of the remote server if it is not executing locally. 

To specify the commands to be run, follow the prompts in the command-line interface. You can specify multiple commands by selecting `4 | stop: to stop and execute all commands asynchronously` when prompted, or exit the program by selecting `0 | quit`. The commands will be run asynchronously when you select `4 | stop`. The results of the commands will be saved to the `screenshots` and `processes` directories, if applicable, and the progress of the commands will be logged to the console.
