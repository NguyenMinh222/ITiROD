import java.io.IOException;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class Client {

    private DatagramSocket datagramSocket;
    private InetAddress inetAddress;
    private byte[] buffer;

    public Client(DatagramSocket datagramSocket, InetAddress inetAddress) {
        this.datagramSocket = datagramSocket;
        this.inetAddress = inetAddress;
    }

    public void sendThenReceive(String nameOfUser){
        Scanner input = new Scanner(System.in);
        while(true){
            try{
                String messageToSend = input.nextLine();
                buffer = messageToSend.getBytes(StandardCharsets.UTF_8);
                DatagramPacket datagramPacket = new DatagramPacket(buffer, buffer.length, inetAddress, 8000);
                datagramSocket.send(datagramPacket);
                datagramSocket.receive(datagramPacket);
                String messageFromServer = new String(datagramPacket.getData(), 0, datagramPacket.getLength());
                System.out.println("Your message in the server. " + nameOfUser+": "+ messageFromServer);
            }catch (IOException e){
                e.printStackTrace();
                break;
            }
        }
    }

    public static void  main(String[] args) throws SocketException, UnknownHostException {
        Scanner input = new Scanner(System.in);
        System.out.println("Text ur name: ");
        String nameOfUser = input.nextLine();
        DatagramSocket datagramSocket = new DatagramSocket();
        InetAddress inetAddress = InetAddress.getByName("localhost");
        Client client = new Client(datagramSocket, inetAddress);
        System.out.println("Send datagram packets to a server.");
        client.sendThenReceive(nameOfUser);
    }
}
