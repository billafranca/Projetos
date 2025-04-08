import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter weight (kg): ");
        double peso = scanner.nextDouble();
        
        System.out.print("Enter height (m): ");
        double altura = scanner.nextDouble();
        
        double imc = peso / Math.pow(altura, 2);
        System.out.printf("Your BMI is: %.2f ", imc);

        String classificacao;
        if (imc < 18.5) {
            classificacao = "Underweight";
        } else if (imc < 25) {
            classificacao = "Normal weight";
        } else if (imc < 30) {
            classificacao = "Overweight";
        } else {
            classificacao = "Obese";
        }

        System.out.println("Your classification is: " + classificacao);
        
        scanner.close();
    }
}

