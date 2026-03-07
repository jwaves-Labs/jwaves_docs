# jWaves Documentation

This repository hosts the jWaves product documentation and knowledge base, built with MkDocs Material and deployed to GitHub Pages.

## Local Development

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
mkdocs serve
```

Local preview: `http://127.0.0.1:8000`

## Build

```powershell
mkdocs build --strict
```

Generated static files are written to the `site/` directory.

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy-pages.yml`) on pushes to `main`.
