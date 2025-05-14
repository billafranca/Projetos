import java.util.*;

public class Notasfor{
    public static void main(String[]args){
        Scanner sc = new Scanner(|System.in);

        double somanotas = 0.0;
        double notas = 0.0;
        double media = 0.0;

        for(int i = 0; i < 4; i++){
            System.out.println("insira um número: "+(i+1)+":")
            somanotas += notas;
            if(notas <0 && >10){
                System.out.println("inválido");
            }
        }
        media = notas /4;
        System.out.println("sua média é: ", media);
    }
    sc.close();
}