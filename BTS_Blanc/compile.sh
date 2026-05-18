#!/bin/bash
# Script de compilation du dossier BTS Blanc
# Lance pdflatex sur chaque fiche puis sur le main

set -e
cd "$(dirname "$0")"

FICHES=(
  fiche_globale
  fiche_reseaux
  fiche_admin_linux
  fiche_cybersecurite
  fiche_programmation
  fiche_web
  fiche_gestion_si
  fiche_maths
  fiche_cejm
  fiche_culture_anglais
)

echo "=== Compilation des fiches BTS Blanc ==="

for fiche in "${FICHES[@]}"; do
  echo "-> Compilation : $fiche.tex"
  pdflatex -interaction=nonstopmode "$fiche.tex" > /dev/null 2>&1
  echo "   OK : $fiche.pdf"
done

echo "-> Compilation du document principal : main.tex"
pdflatex -interaction=nonstopmode main.tex > /dev/null 2>&1
pdflatex -interaction=nonstopmode main.tex > /dev/null 2>&1
echo "   OK : main.pdf"

# Nettoyage des fichiers temporaires
echo "-> Nettoyage..."
rm -f *.aux *.log *.toc *.out *.nav *.snm *.vrb

echo ""
echo "=== Terminé ! Fichiers PDF générés : ==="
ls -lh *.pdf
