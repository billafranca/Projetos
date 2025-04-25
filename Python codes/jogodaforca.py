import random as rdm
#jogo da forca atualizado 2025#
import random

words = ['escolher', 'advertir', 'entrada', 'objetivo']
chosen_word = random.choice(words)
hidden_word = ['_'] * len(chosen_word)
attempts = 6

print("Jogo da forca do bragobas")

while attempts > 0:
    print("\n" + ''.join(hidden_word))
    guess = input("tente uma letra, (recomendo comecar com vogais):  ")

    if guess in chosen_word:
        for i, letter in enumerate(chosen_word):
            if letter == guess:
                hidden_word[i] = guess
    else:
        attempts -= 1
        print("não tem essa letra nesta palavra!" + str(attempts) + " tentativas")

    if '_' not in hidden_word:
        print("\n" + ''.join(hidden_word))
        print("Parabéns você acertou!")
        break
else:
    print("You lost!")

print("\n" + ''.join(hidden_word))

