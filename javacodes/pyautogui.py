import pyautogui
import time
import webbrowser

def abrir_chatgpt():
    webbrowser.open("https://chatgpt.com")
    time.sleep(5)

def pesquisar_no_chatgpt(termo_de_busca):
    abrir_chatgpt()
    pyautogui.position()
    pyautogui.click()
    time.sleep(1)
    pyautogui.write(termo_de_busca, interval=0.1)
    pyautogui.press("enter")
    
termo_de_busca = input("Digite o termo de busca: ")
pesquisar_no_chatgpt(termo_de_busca)

