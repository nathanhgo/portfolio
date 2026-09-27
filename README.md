# Portfolio

Site pessoal de Nathan Guimarães — apresentação, projetos, demonstrações feitas para comércios
locais e contato.

## Rodar

Não tem dependências nem build. Duplo clique em `index.html`, ou:

```bash
python3 -m http.server 8081
```

## Editar

- Texto, projetos e links: direto em `index.html` (decisão D3 em `architecture_docs/decisions.md`).
- Cor, tipografia e espaçamento: só em `assets/base.css`, pelos tokens do `:root`.
- Regras visuais e o que não fazer: `architecture_docs/visual.md`.

Antes de publicar, siga o checklist de `architecture_docs/deploy.md`.
