package remoteaccesstool.xs;

import java.awt.AWTException;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.Robot;
import java.awt.image.BufferedImage;

import java.io.*;
import java.util.ArrayList;

import javax.imageio.ImageIO;
import javax.jws.WebService;

@WebService
public class RemoteServer {

    private void commandExec(String command) {
        Runtime r = Runtime.getRuntime();
        try {
            r.exec(command);
        } catch (IOException e) {
            System.out.println("Exception: " + e);
        }
    }

    public void systemReboot() {
        commandExec("shutdown -r -t " + 3);
    }

    public void systemShutDown() {
        commandExec("shutdown -s -t " + 3);
    }

    public byte[] screenshot() {
        try {
            Rectangle screenRect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
            BufferedImage capture = new Robot().createScreenCapture(screenRect);
            ByteArrayOutputStream temp = new ByteArrayOutputStream();
            ImageIO.write(capture, "jpg", temp);
            return temp.toByteArray();
        } catch (AWTException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public String[] getProcessList() throws IOException {
        try {
            String command;
            String os = System.getProperty("os.name");
            if (os.contains("Windows"))
                command = System.getenv("windir") + "\\system32\\" + "tasklist.exe";
            else
                command = "ps -e";
            Process p = Runtime.getRuntime().exec(command);
            BufferedReader input = new BufferedReader(new InputStreamReader(p.getInputStream()));
            String line;
            ArrayList<String> processList = new ArrayList<String>();
            while ((line = input.readLine()) != null) {
                processList.add(line);
            }
            String[] arr = {};
            return processList.toArray(arr);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
