#include <iostream>
class Calculo {
public:
    void calcularMedia() {
        int soma = 0;
        int nota;
        for (int i = 0; i < 4; i++) {
            std::cout << "Insira a nota " << (i + 1) << ": ";
            std::cin >> nota;
            
            while (nota < 0 || nota > 10) {
                std::cout << "Nota inválida. Insira a nota " << (i + 1) << " novamente: ";
                std::cin >> nota;
            }
            soma += nota; 
        }
        double media = static_cast<double>(soma) / 4; 
        std::cout << "A média é: " << media << std::endl; 
    }
};
int main() {
    Calculo calculo;
    calculo.calcularMedia();
    return 0;
}