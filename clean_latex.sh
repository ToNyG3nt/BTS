#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: clean_latex.sh [DIRECTORY=. ] [--dry-run] [--aggressive]

Cleans LaTeX build artifacts recursively in DIRECTORY.
Default behavior: delete only known LaTeX auxiliary files (safe).
--dry-run   Show what would be deleted, without deleting.
--aggressive  Delete ANY file that is not .tex or .pdf (DANGEROUS: may remove images or assets). Use with care.

Examples:
  clean_latex.sh . --dry-run
  clean_latex.sh /path/to/project
  clean_latex.sh CEJM --aggressive
USAGE
}

DIR="."
DRY_RUN=false
AGGRESSIVE=false

for arg in "$@"; do
  case "${arg}" in
    --dry-run) DRY_RUN=true ;;
    --aggressive) AGGRESSIVE=true ;;
    -h|--help) usage; exit 0 ;;
    *) DIR="${arg}" ;;
  esac
done

if [[ ! -d "${DIR}" ]]; then
  echo "Error: '${DIR}' is not a directory" >&2
  exit 2
fi

# Patterns of LaTeX auxiliary files to remove (safe mode)
PATTERNS=(
  "*.aux" "*.log" "*.out" "*.toc" "*.synctex.gz" "*.fdb_latexmk" "*.fls"
  "*.bbl" "*.blg" "*.nav" "*.snm" "*.vrb" "*.lof" "*.lot" "*.ilg" "*.ind" "*.idx"
  "*.thm" "*.bcf" "*.run.xml" "*.xdv" "*.pdfsync" "*.latexmk" "*.acn" "*.acr" "*.alg"
  "*.glg" "*.glo" "*.gls" "*.ist" "*.dvi" "*.ps" "*.tdo" "*.upa" "*.upb"
)

echo "Cleaning LaTeX artifacts in: ${DIR}"
if ${DRY_RUN}; then echo "(dry-run)"; fi

# Safe cleaning: remove only known aux files
for pat in "${PATTERNS[@]}"; do
  if ${DRY_RUN}; then
    find "${DIR}" -type f -name "${pat}" \
      -not -path "*/.git/*" -not -path "*/.vscode/*" -print
  else
    find "${DIR}" -type f -name "${pat}" \
      -not -path "*/.git/*" -not -path "*/.vscode/*" -print -delete
  fi
done

# Aggressive mode (optional, dangerous): delete any non .tex/.pdf files
if ${AGGRESSIVE}; then
  echo "Aggressive mode enabled: deleting all non-.tex/.pdf files"
  if ${DRY_RUN}; then
    find "${DIR}" -type f \
      ! -name "*.tex" ! -name "*.pdf" \
      -not -name ".DS_Store" \
      -not -path "*/.git/*" -not -path "*/.vscode/*" -print
  else
    find "${DIR}" -type f \
      ! -name "*.tex" ! -name "*.pdf" \
      -not -name ".DS_Store" \
      -not -path "*/.git/*" -not -path "*/.vscode/*" -print -delete
  fi
fi

echo "Done."
