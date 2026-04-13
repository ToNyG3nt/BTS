# Exercice 1 : Calcul du discriminant
import math

def solve_quadratic():
    print("Calcul des racines d'une équation du second degré (ax^2 + bx + c = 0)")
    try:
        a = float(input("Entrez le coefficient a : "))
        b = float(input("Entrez le coefficient b : "))
        c = float(input("Entrez le coefficient c : "))

        if a == 0:
            if b == 0:
                if c == 0:
                    print("L'équation est 0 = 0, une infinité de solutions.")
                else:
                    print("Équation impossible, 0x + c = 0 avec c non nul.")
            else:
                # Équation du premier degré
                x = -c / b
                print(f"Ceci est une équation du premier degré. La solution est x = {x}")
            return

        delta = b**2 - 4*a*c

        if delta > 0:
            x1 = (-b - math.sqrt(delta)) / (2*a)
            x2 = (-b + math.sqrt(delta)) / (2*a)
            print(f"Le discriminant est positif (Δ = {delta}).")
            print(f"Les deux racines réelles distinctes sont : x1 = {x1} et x2 = {x2}")
        elif delta == 0:
            x = -b / (2*a)
            print(f"Le discriminant est nul (Δ = {delta}).")
            print(f"La racine double est : x = {x}")
        else:
            real_part = -b / (2*a)
            imag_part = math.sqrt(abs(delta)) / (2*a)
            print(f"Le discriminant est négatif (Δ = {delta}).")
            print("Les deux racines complexes sont :")
            print(f"x1 = {real_part} - {imag_part}i")
            print(f"x2 = {real_part} + {imag_part}i")

    except ValueError:
        print("Erreur: Veuillez entrer des nombres valides pour les coefficients.")

if __name__ == '__main__':
    solve_quadratic()
