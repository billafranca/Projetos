import java.util.*;

public class Calculadordenotas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("quantas notas voce quer digitar? ");
        int numNotas = scanner.nextInt();

        double[] notas = new double[numNotas];

        for (int i = 0; i < numNotas; i++) {
            System.out.print("Digite a " + (i + 1) + "a nota: ");
            notas[i] = scanner.nextDouble();
        }

        double soma = 0;
        for (double nota : notas) {
            soma += nota;
        }

        double media = soma / numNotas;

        System.out.println("A média das notas é: " + media);

        scanner.close();
    }
}
