import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Jframe extends JFrame implements ActionListener {
    private JTextField textField;
    private String operator = "";
    private double num1 = 0, num2 = 0, result = 0;

    public Jframe() {
        setTitle("Calculator");
        setSize(300, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        textField = new JTextField();
        textField.setEditable(false);
        textField.setFont(new Font("Arial", Font.BOLD, 24));
        add(textField, BorderLayout.NORTH);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(5, 4, 5, 5));

        String[] buttons = {
            "1", "2", "3", "/",
            "4", "5", "6", "*",
            "7", "8", "9", "-",
            "0", ".", "=", "+",
            "C"
        };

        for (String text : buttons) {
            JButton btn = new JButton(text);
            btn.setFont(new Font("Arial", Font.BOLD, 20));
            btn.addActionListener(this);
            panel.add(btn);
        }

        add(panel, BorderLayout.CENTER);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        String cmd = e.getActionCommand();

        if (cmd.matches("[0-9]") || cmd.equals(".")) {
            textField.setText(textField.getText() + cmd);
        } else if (cmd.matches("[+\\-*/]")) {
            try {
                num1 = Double.parseDouble(textField.getText());
            } catch (NumberFormatException ex) {
                num1 = 0;
            }
            operator = cmd;
            textField.setText("");
        } else if (cmd.equals("=")) {
            try {
                num2 = Double.parseDouble(textField.getText());
            } catch (NumberFormatException ex) {
                num2 = 0;
            }
            switch (operator) {
                case "+": result = num1 + num2; break;
                case "-": result = num1 - num2; break;
                case "*": result = num1 * num2; break;
                case "/": result = num2 != 0 ? num1 / num2 : 0; break;
            }
            textField.setText("" + result);
            operator = "";
        } else if (cmd.equals("C")) {
            textField.setText("");
            num1 = num2 = result = 0;
            operator = "";
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(Jframe::new);
    }
}