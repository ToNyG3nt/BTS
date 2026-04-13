# Exercice 3 : Calcul des aires de figures géométriques
import math

def calculate_areas():
    print("Calcul d'aires de figures géométriques")
    print("Choisissez une figure :")
    print("1. Rectangle")
    print("2. Cercle")
    print("3. Triangle")
    print("4. Trapèze")

    choice = input("Votre choix (1-4) : ")

    try:
        if choice == '1':
            length = float(input("Entrez la longueur : "))
            width = float(input("Entrez la largeur : "))
            area = length * width
            print(f"L'aire du rectangle est : {area}")
        elif choice == '2':
            radius = float(input("Entrez le rayon : "))
            area = math.pi * radius**2
            print(f"L'aire du cercle est : {area:.2f}")
        elif choice == '3':
            base = float(input("Entrez la base : "))
            height = float(input("Entrez la hauteur : "))
            area = 0.5 * base * height
            print(f"L'aire du triangle est : {area}")
        elif choice == '4':
            small_base = float(input("Entrez la petite base : "))
            large_base = float(input("Entrez la grande base : "))
            height = float(input("Entrez la hauteur : "))
            area = 0.5 * (small_base + large_base) * height
            print(f"L'aire du trapèze est : {area}")
        else:
            print("Erreur : Choix invalide. Veuillez entrer un nombre entre 1 et 4.")
    except ValueError:
        print("Erreur : Veuillez entrer des nombres valides pour les dimensions.")

if __name__ == '__main__':
    calculate_areas()
