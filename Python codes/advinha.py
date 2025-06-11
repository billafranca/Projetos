import tkinter as tk
import random

class GuessNumberGame:
    def __init__(self, master):
        self.master = master
        master.title("Jogo de Adivinhação")

        self.number = random.randint(1, 100)
        self.tries = 0

        self.label = tk.Label(master, text="Adivinhe um número entre 1 e 100")
        self.label.pack(pady=10)

        self.entry = tk.Entry(master)
        self.entry.pack(pady=5)

        self.button = tk.Button(master, text="Tentar", command=self.check_guess)
        self.button.pack(pady=5)

        self.result = tk.Label(master, text="")
        self.result.pack(pady=10)

        self.reset_button = tk.Button(master, text="Novo Jogo", command=self.reset_game)
        self.reset_button.pack(pady=5)

    def check_guess(self):
        try:
            guess = int(self.entry.get())
        except ValueError:
            self.result.config(text="Por favor, digite um número válido.")
            return

        self.tries += 1

        if guess < self.number:
            self.result.config(text="Tente um número maior!")
        elif guess > self.number:
            self.result.config(text="Tente um número menor!")
        else:
            self.result.config(text=f"Parabéns! Você acertou em {self.tries} tentativas.")

    def reset_game(self):
        self.number = random.randint(1, 100)
        self.tries = 0
        self.result.config(text="")
        self.entry.delete(0, tk.END)

if __name__ == "__main__":
    root = tk.Tk()
    root.geometry("300x200")
    game = GuessNumberGame(root)
    root.mainloop()