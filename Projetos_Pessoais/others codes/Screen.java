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

        JButton sumButton = new JButton("sum");
        sumButton.setBounds(250, 250, 100, 100);
        sumButton.setBackground(new Color(122, 255, 220));
        add(sumButton);
        sumButton.addActionListener(this::sum);

        JButton subtractButton = new JButton("subtract");
        subtractButton.setBounds(350, 250, 100, 100);
        subtractButton.setBackground(new Color(122, 255, 220));
        add(subtractButton);
        subtractButton.addActionListener(this::subtract);

        JButton multipButton = new JButton("multi");
        multipButton.setBounds(450,250,100,100);
        multipButton.setBackground(new Color(122,255,220));
        add(multipButton);
        multipButton.addActionListener(this::multiplicar);

        Font font = new Font("Arial Black", Font.BOLD, 10);

        num1 = new JTextField("number one: ");
        num1.setBounds(100, 100, 100, 100);
        num1.setFont(font);

        num2 = new JTextField("number two: ");
        num2.setBounds(200, 100, 100, 100);
        num2.setFont(font);

        add(num1);
        add(num2);
    }

    private void sum(ActionEvent ae) {
        try {
            int numero1 = Integer.parseInt(num1.getText().trim());
            int numero2 = Integer.parseInt(num2.getText().trim());
            int result = numero1 + numero2;
            JOptionPane.showMessageDialog(null, "The sum is: " + result, "Sum", JOptionPane.INFORMATION_MESSAGE);
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Invalid input", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void subtract(ActionEvent actionEvent) {
        try {
            int numero1 = Integer.parseInt(num1.getText().trim());
            int numero2 = Integer.parseInt(num2.getText().trim());
            int result = numero1 - numero2;
            JOptionPane.showMessageDialog(null, "the sub is: " + result, "Subtraction", JOptionPane.INFORMATION_MESSAGE);
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Invalid input", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    private void multiplicar(ActionEvent actionEvent) {
        try {
            int numero1 = Integer.parseInt(num1.getText().trim());
            int numero2 = Integer.parseInt(num2.getText().trim());
            int result = numero1 * numero2;
            JOptionPane.showMessageDialog(null, "The multiplication is: " + result, "Multiplication", JOptionPane.INFORMATION_MESSAGE);
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Invalid input", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
}
