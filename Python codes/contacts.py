from time import sleep

contacts = {
    "andrezao": "(11)-94828-4508",
    "pedro": "(11)-91358-0024",
    "marco": "(11)92367-8918",}

for contact in contacts:
    print("Name: " + contact + " Phone: " + contacts[contact])
    sleep(1)

name = input("Name: ")
print("Phone: " + contacts[name])