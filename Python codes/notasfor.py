media = 0.0
somaNotas = 0.0


for i in range(4):
    nota = int(input("insira um número"+(i+1)+":"))
    somaNotas += nota
    if nota <0 & nota >10:
        print("inválidos")

media = notas /4
print("sua média é: ", media)