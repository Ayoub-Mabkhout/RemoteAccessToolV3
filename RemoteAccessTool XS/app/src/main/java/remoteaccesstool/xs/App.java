/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package remoteaccesstool.xs;

import javax.xml.ws.Endpoint;

public class App {
    private static final String URL = "http://localhost:9000/remote";

    public static void main(String[] args) {
        RemoteServer remoteServer = new RemoteServer();
        System.out.println("Publishing Remote Server Web Service");
        Endpoint.publish(URL, remoteServer);
        System.out.println("Remote Server Web Service Published");
    }
}