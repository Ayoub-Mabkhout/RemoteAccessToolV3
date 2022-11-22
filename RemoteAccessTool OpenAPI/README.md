# RemoteAccessToolV2: OpenAPI
OpenAPI Remote Server in Java and Python Client with stub generated through Swagger tools. This is a repository for a programming assignment in my 
"SC 3374 Advanced & Distributed Programming Paradigms"course as part of the chapter on "Programming for Integration".


## Demonstrated Learning Outcomes
- Programming for Integration
- Server Skeleton & Client Stub generation
- OpenAPI & Swagger
- Code-First API Development Approach

## Description
The project consist of a client program and a server program accessible remotely through the client. From the client, a user can 
issue one of 3 commands. Either (1) take a screenshot of the main screen,
(2) record and send a list of all processes running on the Server machine, or (3) reboot the server machine.

This implementation should work on both Windows and Unix based machines.

## Technology Enablers
- Server Business Logic is programmed in Java
- Web Service developped using Spring Boot 2.7.2  
- API Specification: OpenAPI v3.0.1
- Protocol: HTTP
- Consumer code programmed in Python with Client Stub generated through Swagger following the API Specification

## Development Approach
This API was developped with a Code-First approach:
1. Started with developping the server business logic in Java. 
2. Marked it as a web service using Java Spring Boot `@RestController` annotation.
3. Generated the API documentation by implementing the `springdoc-openapi-ui` dependency.
4. Started the Spring Boot Server and accessed the api docs through the path `/v3/api-docs` and downloaded it in JSON format.
5. Used [SwaggerHub](https://www.swaggerhub.com) to convert the JSON documentation into YAML format and generated the Python Client SDK.
6. Developped the Python client in `consumer.py` using the generated `swagger_client.RemoteServer` class.

## How To Run
1. Clone this repository
2. CD into the root directory and start the server with the following command: `./gradlew bootRun`.
   - Alternatively, you could cd to `src\\main\\java\\com\\RemoteAccessTool\\` and run the command `java RemoteAccessToolApplication.java`
3. Once the server started, it should be hosted in port 8080
4. CD into `src\\consumers\\python\\` and run `python consumer.py` to start the client. The client will attempt to connect to the URL specified in the OpenAPI
documentation. In the case of this program [`http://localhost:8080/`](http://localhost:8080/)
