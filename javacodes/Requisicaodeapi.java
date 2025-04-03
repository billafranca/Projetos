import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class Requisicaodeapi extends JFrame implements ActionListener {
    public static void main(String[] args) {
        new Requisicaodeapi();
    }

    private JTextField campoTexto;
    private JButton botao;
    private JTextArea textArea;

    public Requisicaodeapi() {
        campoTexto = new JTextField(20);
        botao = new JButton("Enviar");
        textArea = new JTextArea(10, 30);
        textArea.setLineWrap(true);
        textArea.setWrapStyleWord(true);
        textArea.setEditable(false);

        JScrollPane scrollPane = new JScrollPane(textArea);

        botao.addActionListener(this);

        JPanel painel = new JPanel();
        painel.add(campoTexto);
        painel.add(botao);
        painel.add(scrollPane);

        add(painel);

        setTitle("Requisição de API");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == botao) {
            String url = campoTexto.getText();

            new Thread(() -> {
                try {
                    URL urlObj = new URL(url);
                    HttpURLConnection conexao = (HttpURLConnection) urlObj.openConnection();
                    conexao.setRequestMethod("GET");
                    conexao.setRequestProperty("User-Agent", "Mozilla/5.0");

                    int resposta = conexao.getResponseCode();

                    if (resposta == HttpURLConnection.HTTP_OK) {
                        BufferedReader leitor = new BufferedReader(new InputStreamReader(conexao.getInputStream()));
                        StringBuilder conteudo = new StringBuilder();
                        String linha;
                        while ((linha = leitor.readLine()) != null) {
                            conteudo.append(linha).append("\n");
                        }
                        leitor.close();

                        SwingUtilities.invokeLater(() -> textArea.setText(conteudo.toString()));
                    } else {
                        SwingUtilities.invokeLater(() -> textArea.setText("Erro na requisição: " + resposta));
                    }
                } catch (Exception ex) {
                    SwingUtilities.invokeLater(() -> textArea.setText("Erro: " + ex.getMessage()));
                }
            }).start();
        }
    }
}
