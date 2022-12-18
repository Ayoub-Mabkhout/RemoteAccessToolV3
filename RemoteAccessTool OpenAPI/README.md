# RemoteAccessToolV2: OpenAPI
OpenAPI Remote Server in Java and an asynchronous NodeJS Client. This is a repository for a programming assignment in my 
"CSC 3374 Advanced & Distributed Programming Paradigms"course as part of the chapter on "Programming for Perfomance".


## Demonstrated Learning Outcomes
- Programming for Performance
- Asynchronous Programming for I/O Intensive Programs
- Understanding of JavaScript's Event Loop and Callback Queue
- Callback-based and Promise-based Asynchronous Programming in JavaScript

## Description
The project consist of a client program and a server program accessible remotely through the client. From the client, a user can 
issue one of 3 commands. Either (1) take a screenshot of the main screen,
(2) record and send a list of all processes running on the Server machine, or (3) reboot the server machine.

This implementation should work on both Windows and Unix based machines.

## Asyncronous Client
The client/consumer for this remote access tool works in an asynchronous fashions in order to demonstrate an ability to code employ asynchronous programming to gain in performance through non-blocking calls and promise resolution.

## Technology Enablers
- Server Business Logic is programmed in Java
- Web Service developped using Spring Boot 2.7.2  
- API Specification: OpenAPI v3.0.1
- Protocol: HTTP
- NodeJS
- Fetch API through the node-fetch package

## Development Approach
This API was developped with a Code-First approach:
1. Started with developping the server business logic in Java. 
2. Marked it as a web service using Java Spring Boot `@RestController` annotation.
3. Generated the API documentation by implementing the `springdoc-openapi-ui` dependency.
4. Compiled and deployed the API.
5. Developped the NodeJS asynchronous consumer.

## How To Run
1. Clone this repository
2. CD into the root directory and start the server with the following command: `./gradlew bootRun`.
   - Alternatively, you could cd to `src\\main\\java\\com\\RemoteAccessTool\\` and run the command `java RemoteAccessToolApplication.java`
3. Once the server started, it should be hosted in port 8080
4. CD into `src\\consumers\\js\\` and run `node index.js` to start the client. Before that, make sure the dependencies are installed by running `npmm install` in the directory. The client will attempt to connect to [`http://localhost:8080/`](http://localhost:8080/). You can change the URL with that of the remote server if it is not executing locally.
