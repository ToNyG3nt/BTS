# Exercice 2 : Conversion de température

def convert_temperature():
    print("Conversion de température")
    try:
        temp_c = float(input("Entrez la température en degrés Celsius : "))
        
        print("Choisissez le mode de conversion :")
        print("1. Convertir en Fahrenheit")
        print("2. Convertir en Kelvin")
        
        choice = input("Votre choix (1 ou 2) : ")

        if choice == '1':
            temp_f = temp_c * 9/5 + 32
            print(f"{temp_c}°C équivaut à {temp_f:.2f}°F.")
        elif choice == '2':
            temp_k = temp_c + 273.15
            print(f"{temp_c}°C équivaut à {temp_k:.2f}K.")
        else:
            print("Erreur : Choix invalide. Veuillez entrer 1 ou 2.")

    except ValueError:
        print("Erreur : Veuillez entrer une température valide.")

if __name__ == '__main__':
    convert_temperature()
