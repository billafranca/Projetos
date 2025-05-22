#include <iostream>

int main(){
    int a, b, c;
    std::cout << "Digite o número 1: ";
    std::cin >> a;
    std::cout << "Digite o número 2: ";
    std::cin >> b;
    std::cout << "Digite o número 3: ";
    std::cin >> c;

    if (a < b && a < c) {
        if (b < c) {
            std::cout << a << " " << b << " " << c << std::endl;
        } else {
            std::cout << a << " " << c << " " << b << std::endl;
        }
    } else if (b < a && b < c) {
        if (a < c) {
            std::cout << b << " " << a << " " << c << std::endl;
        } else {
            std::cout << b << " " << c << " " << a << std::endl;
        }
    } else if (c < a && c < b) {
        if (a < b) {
            std::cout << c << " " << a << " " << b << std::endl;
        } else {
            std::cout << c << " " << b << " " << a << std::endl;
        }
    }
}
