import java.util.Scanner;

public class Calculadora {
	public static void main(String[] args){
	Scanner sc = new Scanner(System.in);

		double num1, num2;
		System.out.print("Digite o primeiro termo: ");
		num1 = sc.nextDouble();
		System.out.print("Digite o segundo termo: ");
		num2 = sc.nextDouble();
		sc.nextLine();
		String forma = "";
		System.out.print("Digite a operação desejada (+, -, *, / ou %): ");
		forma = sc.nextLine();
		double res;

		switch (forma) {
			case "+" -> {
				res = num1 + num2;
				System.out.println("Resultado: " + res);
			}
			case "-" -> {
				res = num1 - num2;
				System.out.println("Resultado: " + res);
			}
			case "*" -> {
				res = num1 * num2;
				System.out.println("Resultado: " + res);
			}
			case "/" -> {
				if (num2 != 0) {
					res = num1 / num2;
					System.out.println("Resultado: " + res);
				}	
				else {
					System.out.println("NAO PODE DIVIDIR POR ZERO");
				}
			}
			case "%" -> {
				res = num1 % num2;
				System.out.println("Resultado: " + res);
			}
			}
			sc.close();
		}
	}
