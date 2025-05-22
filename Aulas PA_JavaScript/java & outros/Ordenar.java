import java.util.*;

public class Ordenar {
    public static void main(String[] args){
        Scanner sc = new Scanner (System.in);

        System.out.print("digite o número 1: ");
        double a = sc.nextDouble();

        System.out.print("digite o número 2: ");
        double b = sc.nextDouble();

        System.out.print("digite o número 3: ");
        double c = sc.nextDouble();


                        if (a <= b && a <= c) {
            if (b <= c) {
                System.out.println(a + " " + b + " " + c);
            } else {
                System.out.println(a + " " + c + " " + b);
            }
        } else if (b <= a && b <= c) {
            if (a <= c) {
                System.out.println(b + " " + a + " " + c);
            } else {
                System.out.println(b + " " + c + " " + a);
            }
        } else {
            if (a <= b) {
                System.out.println(c + " " + a + " " + b);
            } else {
                System.out.println(c + " " + b + " " + a);
            }
        }
            sc.close();
        
    }
}