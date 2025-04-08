import java.util.*;
public class Circunferencia {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        final double PI = 3.14;

        System.out.print("Enter the value of raio: ");
        double raio = scanner.nextDouble();

        double area = PI * (raio * raio);
        System.out.println("The area of circle is: " + area);
    }
}
