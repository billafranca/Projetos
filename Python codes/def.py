def saudacao(nome, idade):
    print(f"Olá {nome}, você tem {idade} anos")

def calcular_expressao(calculo1, operador, calculo2):
    if operador == "+":
        resultado = calculo1 + calculo2
    elif operador == "-":
        resultado = calculo1 - calculo2
    elif operador == "*":
        resultado = calculo1 * calculo2
    elif operador == "/":
        if calculo2 != 0:
            resultado = calculo1 / calculo2
        else:
            raise ValueError("Divisão por zero!")
    else:
        raise ValueError("Operador inválido")
    return resultado

if __name__ == "__main__":
    nome = input("Digite o seu nome: ")
    idade = int(input("Digite a sua idade: "))
    saudacao(nome, idade)

    calculo1 = float(input("Digite o primeiro número: "))
    operador = input("Qual operação deseja realizar (+, -, *, /): ")
    calculo2 = float(input("Digite o segundo número: "))

    try:
        resultado = calcular_expressao(calculo1, operador, calculo2)
        print(f"O resultado da expressão é: {resultado}")
    except ValueError as e:
        print(e)