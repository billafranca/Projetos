import java.util.Scanner;

public class Salarioebugs {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor do salário: ");
        double salario = scanner.nextDouble();

        System.out.print("Digite a quantidade de bugs que você resolveu: ");
        int qntdbugs = scanner.nextInt();

        double bonus = getBonus(salario, qntdbugs);

        System.out.printf("Seu salário final é: %.2f%n", salario + bonus);
    }

    private static double getBonus(double salario, int qntdbugs) {
        if(qntdbugs < 5){
            return salario * 0.05;
        }else if(qntdbugs <= 7){
            return salario * 0.10;
        }else{
            return salario * 0.15;
        }
    }
}

