import java.util.*;
import java.util.Random;
public class Advinhe{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("digite um número");
        double numero = scanner.nextDouble();


        Random rm = new Random();
        int numeroSecreto = rm.nextInt(0,10);

        while (numero != numeroSecreto) {
            
            System.out.print("Você errou! Tente novamente: ");
            numero = scanner.nextDouble();
            
        }
        scanner.close();
        System.out.println("Parabéns! Você acertou o número: " + numeroSecreto);
    }
}