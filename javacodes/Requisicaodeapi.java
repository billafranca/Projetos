import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class Requisicaodeapi extends JFrame implements ActionListener {
    public static void main(String[] args) {
        new Requisicaodeapi();
    }
    private JTextField campoTexto;
    private JButton botao;
    private JLabel label;

    public Requisicaodeapi() {
        campoTexto = new JTextField(20);
        botao = new JButton("Enviar");
        label = new JLabel();

        botao.addActionListener(this);

        JPanel painel = new JPanel();
        painel.add(campoTexto);
        painel.add(botao);
        painel.add(label);

        add(painel);

        setTitle("Requisição de API");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == botao) {
            String url = campoTexto.getText();
            try {
                URL urlObj = new URL(url);
                HttpURLConnection conexao = (HttpURLConnection) urlObj.openConnection();
                conexao.setRequestMethod("GET");
                int resposta = conexao.getResponseCode();
                if (resposta == HttpURLConnection.HTTP_OK) {
                    BufferedReader leitor = new BufferedReader(new InputStreamReader(conexao.getInputStream()));
                    StringBuilder conteudo = new StringBuilder();
                    String linha;
                    while ((linha = leitor.readLine()) != null) {
                        conteudo.append(linha);
                    }
                    leitor.close();
                    label.setText(conteudo.toString());
                } else {
                    label.setText("Erro na requisição: " + resposta);
                }
            } catch (MalformedURLException ex) {
                label.setText("URL inválida: " + ex.getMessage());
            } catch (IOException ex) {
                label.setText("Erro na conexão: " + ex.getMessage());
            }
        }
    }
}
