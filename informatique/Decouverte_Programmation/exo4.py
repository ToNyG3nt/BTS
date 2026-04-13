# Exercice 4 : Calculatrice d'opérations de base

def simple_calculator():
    print("Calculatrice simple")
    print("Choisissez une opération :")
    print("+. Addition")
    print("-. Soustraction")
    print("*. Multiplication")
    print("/. Division")
    print("**. Puissance")

    op = input("Votre choix (+, -, *, /, **) : ")

    if op not in ['+', '-', '*', '/', '**']:
        print("Erreur : Opération invalide.")
        return

    try:
        x = float(input("Entrez le premier nombre (x) : "))
        y = float(input("Entrez le deuxième nombre (y) : "))

        if op == '+':
            result = x + y
            print(f"Résultat : {x} + {y} = {result}")
        elif op == '-':
            result = x - y
            print(f"Résultat : {x} - {y} = {result}")
        elif op == '*':
            result = x * y
            print(f"Résultat : {x} * {y} = {result}")
        elif op == '/':
            if y == 0:
                print("Erreur : Division par zéro est impossible.")
            else:
                result = x / y
                print(f"Résultat : {x} / {y} = {result}")
        elif op == '**':
            result = x ** y
            print(f"Résultat : {x} ** {y} = {result}")

    except ValueError:
        print("Erreur : Veuillez entrer des nombres valides.")

if __name__ == '__main__':
    simple_calculator()
