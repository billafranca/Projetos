import java.util.*;

public class Atvum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("digite uma expressão: ");
        String expressao = sc.nextLine();

        double resultado = eval(expressao);

        System.out.println("resultado: " + resultado);
        sc.close();
    }

    public static double eval(final String str) {
        return new Object() {
            int pos = -1, ch;

            void nextChar() {
                ch = (++pos < str.length()) ? str.charAt(pos) : -1;
            }

            boolean eat(int charToEat) {
                while (ch == ' ') nextChar();
                if (ch == charToEat) {
                    nextChar();
                    return true;
                }
                return false;
            }

            double parse() {
                nextChar();
                double x = 0;
                int start = pos;
                if (Character.isDigit(ch) || ch == '.') {
                    while (Character.isDigit(ch) || ch == '.') nextChar();
                    x = Double.parseDouble(str.substring(start, pos));
                }
                if (pos >= 0) {
                    int endpos = this.pos;
                    while (endpos < str.length() && Character.isDigit(str.charAt(endpos))) endpos++;
                    if (endpos > pos) {
                        x = Double.parseDouble(str.substring(pos, endpos));
                        this.pos = endpos - 1;
                    }
                    nextChar();
                }
                if (eat('-')) x = -x;
                return x;
            }

            double factor() {
                double x = parse();
                for (; ; ) {
                    if (eat('*')) x *= parse();
                    else if (eat('/')) x /= parse();
                    else break;
                }
                return x;
            }

            double expr() {
                double x = factor();
                for (; ; ) {
                    if (eat('+')) x += factor(); 
                    else if (eat('-')) x -= factor(); 
                    else break;
                }
                return x;
            }
        }.expr();
    }
}

