RemoteAccessToolV3: Node.js Consumer
====================================

This is a Node.js consumer for the RemoteAccessToolV3 XML/SOAP Java Server, which allows users to remotely issue commands to the server through the client.

Description
-----------

The consumer program allows users to specify a sequence of commands to be issued to the server and execute them asynchronously. The commands that can be issued include:

-   Take a screenshot of the main screen
-   Record and send a list of all processes running on the server machine
-   Reboot the server machine

The client uses the 'soap' module to make Remote Procedure Calls (RPC) to the server. The results of the commands will be saved to the 'screenshots' and 'processes' directories, if applicable, and the progress of the commands will be logged to the console.

How to Run
----------

1.  Make sure the dependencies are installed by running `npm install` in the directory.
2.  Run `node index.js` to start the client. The client will attempt to connect to the server hosted on `localhost:9000/remote`. You can change the URL to that of the remote server if it is not executing locally.
3.  To specify the commands to be run, follow the prompts in the command-line interface. You can specify multiple commands by selecting `4 | stop:` to stop and execute all commands asynchronously when prompted, or exit the program by
