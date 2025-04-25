import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
public class Screen extends JFrame {

    JTextField num1;
    JTextField num2;

    public Screen() {
        setVisible(true);
        setSize(700, 700);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(null);

        JButton jbutton = new JButton("sum/sub");
        jbutton.setBounds(250, 250, 100, 100);
        jbutton.setBackground(new Color(122, 255, 220));
        add(jbutton);
        jbutton.addActionListener(this::somar);
        Font font = new Font("Arial Black", Font.BOLD, 10);


        JButton jb = new JButton("subtraction");
        jbutton.setBounds(350, 250, 100, 100);
        jbutton.setBackground(new Color(122, 255, 220));
        add(jbutton);
        jbutton.addActionListener(this::sub);
        add(jbutton);
        Font ft = new Font("Arial Black", Font.BOLD, 10);


        num1 = new JTextField("number one: ");
        num1.setBounds(100, 100, 100, 100);
        num1.setFont(font);
        num2 = new JTextField("number two: ");
        num2.setBounds(200, 100, 100, 100);
        num2.setFont(font);
        add(num1);
        add(num2);


    }

    private void somar(ActionEvent ae) {
        try {
            int numero1 = Integer.parseInt(num1.getText());
            int numero2 = Integer.parseInt(num2.getText());
            int soma = numero1 + numero2;

            JOptionPane.showMessageDialog(null, "the sum is: " + soma, "soma", JOptionPane.INFORMATION_MESSAGE);

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "error", "error", JOptionPane.ERROR_MESSAGE);
        }


    }

    private void sub(ActionEvent actionEvent) {
        try {
            int numero1 = Integer.parseInt(num1.getText());
            int numero2 = Integer.parseInt(num2.getText());
            int subtraction = numero1 - numero2;

            JOptionPane.showMessageDialog(null, "the sub is: " + subtraction, "subtraction", JOptionPane.INFORMATION_MESSAGE);

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "error", "error", JOptionPane.ERROR_MESSAGE);
        }
    }
}