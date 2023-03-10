import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.ScrollPane;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JTextPane;
import javax.swing.text.BadLocationException;
import javax.swing.text.StyledDocument;

@SuppressWarnings("serial")
public class ClientWindow extends JFrame {

    String port_name;
    JTextPane message_field;
    JTextPane room_field;
    private final JTextField fieldNickname = new JTextField("");

    String message = "";
    boolean message_is_ready = false;

    public ClientWindow() {
        setSize(800, 600);
        setTitle("UDP Chat room");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        room_field = new JTextPane();
        message_field = new JTextPane();
        room_field.setEditable(false);
        ScrollPane x = new ScrollPane();
        x.add(room_field);
        ScrollPane z = new ScrollPane();
        z.add(message_field);
        z.setPreferredSize(new Dimension(100, 100));
        add(x, BorderLayout.CENTER);
        add(z, BorderLayout.SOUTH);
        add(fieldNickname, BorderLayout.NORTH);

        try(FileReader reader = new FileReader("History.txt"))
        {
            StyledDocument doc = room_field.getStyledDocument();
            char[] buf = new char[256];
            int c;
            while((c = reader.read(buf))>0){
                if(c < 256){
                    buf = Arrays.copyOf(buf, c);
                }
                String res = String.valueOf(buf);
                doc.insertString(doc.getLength(),  res + "\n", null);
            }
        }
        catch(IOException ex){
            System.out.println(ex.getMessage());
        } catch (BadLocationException e) {
            throw new RuntimeException(e);
        }

        setVisible(true);
        message_field.addKeyListener(new KeyListener() {

            @Override
            public void keyTyped(KeyEvent e) {
            }

            @Override
            public void keyReleased(KeyEvent e) {

                if (e.getKeyCode() == 10) {
                    message_field.setCaretPosition(0);
                }
            }

            @Override
            public void keyPressed(KeyEvent e) {

                if (e.getKeyCode() == 10 && !message_is_ready) {
                    message = message_field.getText().trim();
                    message_field.setText(null);
                    if (!message.equals(null) && !message.equals("")) {
                        message_is_ready = true;
                    }
                }
            }
        });
    }

    public void displayMessage(String receivedMessage) {
        StyledDocument doc = room_field.getStyledDocument();
        try {
                    doc.insertString(doc.getLength(),  receivedMessage + "\n", null);
        } catch (BadLocationException e1) {
            e1.printStackTrace();
        }
    }

    public boolean isMessageReady() {
        return message_is_ready;
    }

    public void setMessageReady(boolean messageReady) {
        this.message_is_ready = messageReady;
    }

    public String getMessage() {
        return message;
    }

}