RemoteAccessToolV3: XML/SOAP Java Server
========================================

This is a repository for a programming assignment in my "CSC 3374 Advanced & Distributed Programming Paradigms" course as part of the chapter on "Programming for Perfomance". It contains a Java server program and a Node.js client program that allow a user to remotely issue commands to the server through the client.

Demonstrated Learning Outcomes
------------------------------

-   Programming for Performance
-   Asynchronous Programming for I/O Intensive Programs
-   Understanding of JavaScript's Event Loop and Callback Queue
-   Callback-based and Promise-based Asynchronous Programming in JavaScript

Description
-----------

The project consists of a client program and a server program that are accessible remotely through the client. From the client, a user can issue one of 3 commands:

-   Take a screenshot of the main screen
-   Record and send a list of all processes running on the server machine
-   Reboot the server machine

This implementation should work on both Windows and Unix-based machines.

Asynchronous Client
-------------------

The client for this remote access tool works in an asynchronous fashion to demonstrate the use of asynchronous programming for performance through non-blocking calls and promise resolution.

Technology Enablers
-------------------

-   Server business logic is programmed in Java
-   Web service developed using XML/SOAP
-   Protocol: HTTP
-   WSDL-generated documentation
-   Node.js
-   'soap' module for making RPC calls

Development Approach
--------------------

This API was developed with a code-first approach:

1.  Started with developing the server business logic in Java.
2.  Marked it as a web service using XML/SOAP.
3.  Generated the WSDL file from the Class RemoteServer and stored it in app/bin/main/
4.  Compiled and deployed the API.
5.  Developed the asynchronous Node.js client.

How to Run
----------

1.  Clone this repository
2.  CD into the root directory and start the server with the command: `java -cp "bin" com.RemoteAccessTool.RemoteAccessToolApplication`
3.  Once the server has started, it will be hosted on port 8080
4.  CD into src/consumers/js and run `node index.js` to start the client. Before that, make sure the dependencies are installed by running `npm install` in the directory. The client will attempt to connect to `http://localhost:8080/`. You can change the URL to that of the remote server if it is not executing locally.
