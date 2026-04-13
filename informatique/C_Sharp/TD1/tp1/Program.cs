using System;

class Program
{
    // Fonctions de saisie sécurisée
    static int SaisirEntier(string message)
    {
        int nombre;
        Console.WriteLine(message);
        while (!int.TryParse(Console.ReadLine(), out nombre))
        {
            Console.WriteLine("Erreur: Veuillez entrer un nombre entier valide.");
            Console.WriteLine(message);
        }
        return nombre;
    }

    static float SaisirFloat(string message)
    {
        float nombre;
        Console.WriteLine(message);
        while (!float.TryParse(Console.ReadLine(), out nombre))
        {
            Console.WriteLine("Erreur: Veuillez entrer un nombre valide.");
            Console.WriteLine(message);
        }
        return nombre;
    }
    
    static double SaisirDoublePositif(string message)
    {
        double nombre;
        Console.WriteLine(message);
        while (!double.TryParse(Console.ReadLine(), out nombre) || nombre <= 0)
        {
            Console.WriteLine("Erreur: Veuillez entrer un nombre valide et positif.");
            Console.WriteLine(message);
        }
        return nombre;
    }

    // Méthode pour l'Exercice 1
    static void Exercice1()
    {
        string nom = "Maël";
        string prenom = "Mignard";
        int age = 19;
        Console.WriteLine($"Bonjour, je m'appelle {prenom} {nom} et j'ai {age} ans.");
    }

    // Méthode pour l'Exercice 2
    static void Exercice2()
    {
        Console.WriteLine("Entrez le nom de la ville : ");
        string ville = Console.ReadLine();
        int nb_habitants = SaisirEntier("Entrez le nombre d'habitants : ");
        Console.WriteLine($"La ville de {ville} compte {nb_habitants} habitants.");
    }

    // Méthode pour l'Exercice 3
    static void Exercice3()
    {
        float note1 = SaisirFloat("Entrez la première note : ");
        float note2 = SaisirFloat("Entrez la deuxième note : ");
        float note3 = SaisirFloat("Entrez la troisième note : ");
        float note4 = SaisirFloat("Entrez la quatrième note : ");
        float note5 = SaisirFloat("Entrez la cinquième note : ");
        Console.WriteLine($"La moyenne des notes est : {(note1 + note2 + note3 + note4 + note5) / 5:F2}");
    }

    // Méthode pour l'Exercice 4
    static void Exercice4()
    {
        float prix_ht = SaisirFloat("Entrez le prix hors taxe (HT) : ");
        float taux_tva = SaisirFloat("Entrez le taux de TVA (en pourcentage) : ");
        float prix_ttc = prix_ht * (1 + taux_tva / 100);
        Console.WriteLine($"Le prix toutes taxes comprises (TTC) est : {prix_ttc:C2}");
    }

    // Méthode pour l'Exercice 5
    static void Exercice5()
    {
        int age = SaisirEntier("Entrez votre âge : ");
        if (age >= 18)
        {
            Console.WriteLine("Vous êtes majeur.");
        }
        else
        {
            Console.WriteLine("Vous êtes mineur.");
        }
    }

    //Methode Exercice 6
    static void Exercice6()
    {
        float note1 = SaisirFloat("Entrez la première note : ");
        float note2 = SaisirFloat("Entrez la deuxième note : ");
        float note3 = SaisirFloat("Entrez la troisième note : ");
        float moyenne = (note1 + note2 + note3) / 3;

        Console.WriteLine($"Votre moyenne est de : {moyenne:F2}");
        if (moyenne >= 16)
        {
            Console.WriteLine("Mention très bien.");
        }
        else if (moyenne >= 14)
        {
            Console.WriteLine("Mention bien.");
        }
        else if (moyenne >= 12)
        {
            Console.WriteLine("Mention assez bien.");
        }
    }

    //Methode exercice 7
    static void Exercice7()
    {
        float prix = -1, somme = 0;
        Console.WriteLine("--- Calcul du total des achats (entrez 0 pour terminer) ---");
        while (prix != 0)
        {
            prix = SaisirFloat("Entrez le prix de l'article : ");
            somme += prix;
        }
        Console.WriteLine($"Le total des achats est : {somme:C2}");
    }

    //Methode exerccie 8
    static void Exercice8()
    {
        float note = -1;
        while (note < 0 || note > 20)
        {
            note = SaisirFloat("Entrez une note entre 0 et 20 : ");
        }
        Console.WriteLine($"La note saisie est : {note}");
    }

    //Methode et fonction exercice 9
    static int Somme(int a, int b)
    {
        return a + b;
    }
    static void Exercice9()
    {
        Console.WriteLine("--- Calcul de la somme de deux nombres ---");
        int a = SaisirEntier("Entrez le premier nombre : ");
        int b = SaisirEntier("Entrez le deuxième nombre : ");
        Console.WriteLine($"La somme de {a} et {b} est : {Somme(a,b)}");
    }

    //Methode et fonction exercice 10
    static double CalculerIMC(double poidsKg, double tailleCm)
    {
        if (tailleCm <= 0) return 0;
        double tailleM = tailleCm / 100.0;
        return poidsKg / (tailleM * tailleM);
    }
    static void Exercice10()
    {
        Console.WriteLine("--- Application de Calcul d'IMC ---");
        Console.WriteLine("\nVeuillez saisir votre nom et prénom : ");
        string nom = Console.ReadLine();
        double poids = SaisirDoublePositif("Veuillez saisir votre poids en kg : ");
        double tailleCm = SaisirDoublePositif("Veuillez saisir votre taille en centimètres : ");
        double imc = CalculerIMC(poids, tailleCm);
        Console.WriteLine($"\nBonjour {nom},\n");
        Console.WriteLine($"Votre Indice de Masse Corporelle (IMC) est de : {imc:F2}");
    }

    //Methode et fonctions exercice 11
    static void AfficherTableau(int[] tableau)
    {
        Console.Write("[ " + string.Join(", ", tableau) + " ]\n");
    }

    static void Remplace(int[] tableau, int indice, int valeur)
    {
        tableau[indice] = valeur;
    }

    static void Exercice11()
    {
        int[] tab = { 12, 15, 13, 10, 8, 9, 13, 14 };

        Console.WriteLine("Tableau avant modification : ");
        AfficherTableau(tab);

        int indice = SaisirEntier($"Entrez un indice (entre 0 et {tab.Length - 1}) : ");
        
        if (indice >= 0 && indice < tab.Length)
        {
            int valeur = SaisirEntier("Entrez la nouvelle valeur entière : ");
            Remplace(tab, indice, valeur);
        }
        else
        {
            Console.WriteLine("Erreur : L'indice est en dehors des limites du tableau.");
        }

        Console.WriteLine("Tableau après modification : ");
        AfficherTableau(tab);
    }

    //Methode et fonctions exercice 12
    static void RemplirTableau2D(int[,] tableau)
    {
        Console.WriteLine("\n--- Remplissage du tableau 2D ---");
        Console.WriteLine("Entrez un indice de ligne négatif pour arrêter.");
        while (true)
        {
            int ligne = SaisirEntier($"Entrez l'indice de la ligne (0-{tableau.GetLength(0) - 1}) : ");
            if (ligne < 0) break;

            int colonne = SaisirEntier($"Entrez l'indice de la colonne (0-{tableau.GetLength(1) - 1}) : ");

            if (ligne >= 0 && ligne < tableau.GetLength(0) && colonne >= 0 && colonne < tableau.GetLength(1))
            {
                int valeur = SaisirEntier("Entrez la valeur : ");
                tableau[ligne, colonne] = valeur;
            }
            else
            {
                Console.WriteLine("Erreur : Indices en dehors des limites du tableau.");
            }
        }
    }

    static void AfficherTableau2D(int[,] tableau)
    {
        Console.WriteLine("\nContenu du tableau 2D : ");
        for (int i = 0; i < tableau.GetLength(0); i++)
        {
            for (int j = 0; j < tableau.GetLength(1); j++)
            {
                Console.Write(tableau[i, j] + "\t");
            }
            Console.WriteLine();
        }
    }

    static void AfficheDiagonale(int[,] tableau)
    {
        Console.WriteLine("\nValeurs de la diagonale : ");
        for (int i = 0; i < tableau.GetLength(0); i++)
        {
            Console.Write(tableau[i, i] + " ");
        }
        Console.WriteLine();
    }

    static void Exercice12()
    {
        int[,] tableau = new int[5, 5];
        
        RemplirTableau2D(tableau);
        AfficherTableau2D(tableau);
        AfficheDiagonale(tableau);
    }

    //Methode Main
    static void Main(string[] args)
    {
        //Exercice1();
        //Exercice2();
        //Exercice3();
        //Exercice4();
        //Exercice5();
        //Exercice6();
        //Exercice7();
        //Exercice8();
        //Exercice9();
        //Exercice10();
        //Exercice11();
        //Exercice12();
    }
}