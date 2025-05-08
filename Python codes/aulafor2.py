soma_par = 0
soma_impar = 0

for i in range(11):
    if i % 2 == 0:
        print("{}: par".format(i))
        soma_par += i
    else:
        print("{}: ímpar".format(i))
        soma_impar += i

maior = "Soma dos Impares" if soma_impar > soma_par else "Soma dos Pares"

print("Soma dos números pares: {}\nSoma dos números impares: {}\nMaior soma: {}".format(soma_par, soma_impar, maior))
