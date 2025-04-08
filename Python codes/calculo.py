def calculator():
    while True:
        try:
            expression = input("Digite uma express o para calcular (ou 'sair' para sair): ")
            if expression.lower() == 'sair':
                break
            result = eval(expression)
            print("Resultado:", result)
        except Exception as e:
            print("Erro:", e)

calculator()
