using System;

namespace Calcul_IMC
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("--- Application de Calcul d'IMC ---");

            // Saisie du nom et prénom
            Console.WriteLine("\nVeuillez saisir votre nom et prénom : ");
            string nom = Console.ReadLine();

            // Saisie sécurisée du poids
            double poids = SaisirNombrePositif("Veuillez saisir votre poids en kg : ");

            // Saisie sécurisée de la taille
            double tailleCm = SaisirNombrePositif("Veuillez saisir votre taille en centimètres : ");

            // Calcul de l'IMC via la fonction dédiée
            double imc = CalculerIMC(poids, tailleCm);

            // Affichage du résultat
            Console.WriteLine($"\nBonjour {nom},");
            Console.WriteLine($"Votre Indice de Masse Corporelle (IMC) est de : {imc:F2}");
        }

        /// <summary>
        /// Calcule l'Indice de Masse Corporelle (IMC).
        /// </summary>
        /// <param name="poidsKg">Le poids en kilogrammes.</param>
        /// <param name="tailleCm">La taille en centimètres.</param>
        /// <returns>La valeur de l'IMC calculée.</returns>
        static double CalculerIMC(double poidsKg, double tailleCm)
        {
            // On s'assure de ne pas diviser par zéro si la taille est invalide
            if (tailleCm <= 0)
            {
                return 0;
            }
            
            // Conversion de la taille en mètres
            double tailleM = tailleCm / 100.0;
            
            // Calcul de l'IMC : poids / (taille * taille)
            return poidsKg / (tailleM * tailleM);
        }

        /// <summary>
        /// Gère la saisie sécurisée d'un nombre positif (double) par l'utilisateur.
        /// La boucle continue tant que la saisie n'est pas un nombre valide et positif.
        /// </summary>
        /// <param name="message">Le message à afficher à l'utilisateur.</param>
        /// <returns>Le nombre validé saisi par l'utilisateur.</returns>
        static double SaisirNombrePositif(string message)
        {
            double nombre;
            Console.WriteLine(message);
            
            // La boucle s'exécute tant que la conversion échoue ou que le nombre est négatif/nul.
            while (!double.TryParse(Console.ReadLine(), out nombre) || nombre <= 0)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Erreur de saisie. Veuillez entrer un nombre valide et positif.");
                Console.ResetColor();
                Console.WriteLine(message); // Répète la question
            }
            return nombre;
        }
    }
}