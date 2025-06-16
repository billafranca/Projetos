import pyautogui
import time
import webbrowser

time.sleep(5)

def escreverPyAutoGui(mensagem):
    pyautogui.click(100, 200)  
    time.sleep(1)
    pyautogui.write(mensagem, interval=0.1)

mensagem = input("")
escreverPyAutoGui(mensagem)
