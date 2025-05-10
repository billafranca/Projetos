import random

def escolher_numero():
    n = int(input("digite um número: "))
    num_aleatorio = random.randint(1, 10)

    print(f"O número escolhido foi {n} e o número aleatório foi {num_aleatorio}")

    if n == num_aleatorio:
        print("Parabéns, você acertou!")
    else:
        print("Tente novamente")
