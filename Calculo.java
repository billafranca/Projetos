import java.util.Scanner;

public class Calculo{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("first term: ");
        double num1 = scanner.nextDouble();
        System.out.println("second term: ");
        double num2 = scanner.nextDouble();

        double result = somar(num1, num2);
        System.out.println("the som is: "+result);
    }
    public static double somar(double num1, double num2){
        return num1 + num2;
    }
}
