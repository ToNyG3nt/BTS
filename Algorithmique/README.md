# Dossier Algorithmique

Ce dossier contient des ressources pour écrire du pseudo-code en LaTeX.

## Fichiers disponibles

1. **pseudocode_template.tex** - Template complet avec exemples d'algorithmes classiques
2. **exercices_algo.tex** - Exercices d'algorithmique avec solutions et exercices à compléter

## Packages LaTeX nécessaires

Pour compiler ces fichiers, vous aurez besoin des packages suivants :
- `algorithm` - Pour créer des environnements d'algorithmes
- `algpseudocode` - Pour la syntaxe du pseudo-code
- `xcolor` - Pour les couleurs (optionnel)

## Installation des packages (si nécessaire)

Si vous utilisez une distribution LaTeX complète comme TeX Live ou MiKTeX, ces packages sont normalement inclus.

## Utilisation

### Commandes de base pour le pseudo-code :

- `\If{condition}` ... `\EndIf` - Structure conditionnelle
- `\For{variable de début à fin}` ... `\EndFor` - Boucle for
- `\While{condition}` ... `\EndWhile` - Boucle while
- `\Function{nom}{paramètres}` ... `\EndFunction` - Définition de fonction
- `\Procedure{nom}{paramètres}` ... `\EndProcedure` - Définition de procédure
- `\State instruction` - Une instruction
- `\Return valeur` - Instruction de retour
- `\Comment{texte}` - Commentaire

### Exemple d'utilisation :

```latex
\begin{algorithm}[H]
\caption{Mon algorithme}
\begin{algorithmic}[1]
\Function{MonAlgorithme}{paramètre}
    \State instruction1
    \If{condition}
        \State instruction2
    \EndIf
    \State \Return résultat
\EndFunction
\end{algorithmic}
\end{algorithm}
```

## Compilation

Compilez avec `pdflatex` :
```bash
pdflatex nom_du_fichier.tex
```

Bon travail avec vos algorithmes !