# Portfólio — Nathan Guimarães

Site pessoal de Nathan Guimarães: apresentação, projetos, espaço para as páginas de demonstração
feitas para comércios locais e contato. Página estática, escrita à mão, sem framework e sem
dependências — o que existe aqui é o que aparece no navegador.

## Mapa dos documentos

| Quando | Leia |
|---|---|
| Antes de escrever qualquer texto que vai para o site | `architecture_docs/visual.md` (seção de copy) |
| Antes de mexer em layout, cor ou tipografia | `architecture_docs/visual.md` |
| Antes de mexer em HTML/CSS/JS | `architecture_docs/stack.md` |
| Antes de dizer que algo ficou pronto | `architecture_docs/tests.md` |
| Antes de responder "por que isso é assim?" | `architecture_docs/decisions.md` |
| Antes de publicar | `architecture_docs/deploy.md` |
| Ao terminar qualquer mudança | `architecture_docs/logs.md` (append) + `mvp.md` (checkbox) |

O contexto de carreira (o que vender, para quem) não está aqui: vive em
`~/Documentos/CodeInProgress/renda-extra/`.

## Convenções fixas

- **Idioma**: código, nomes de arquivo e commits em inglês. **Todo texto visível é pt-BR.**
- **Zero dependências e zero build.** HTML, CSS e JS puros. Se um recurso exigir bundler ou
  framework, ele não entra: a página tem que funcionar abrindo o arquivo.
- **Funciona sem JavaScript.** O JS só melhora (copiar e-mail, por exemplo). Nenhum conteúdo pode
  depender dele.
- **Nada de dado inventado**: sem depoimento, sem métrica de vaidade ("+50 projetos"), sem prêmio,
  sem cliente que não existiu. Todo projeto listado tem repositório ou contexto real.
- **Sem cor, fonte ou espaçamento hardcoded fora de `assets/base.css`** (tokens no `:root`).
- **Sem emoji, sem ícone decorativo, sem "pílula" em botão, sem gradiente, sem sombra difusa** — a
  lista completa e o motivo estão em `architecture_docs/visual.md`.
- **Nunca commitar segredo, telefone pessoal ou endereço residencial.** Contato público: e-mail e
  GitHub.

## Estrutura

- `index.html` — a página inteira (é estática e escrita à mão; conteúdo não vem de JSON)
- `assets/base.css` — tokens e estilos
- `assets/main.js` — melhoria progressiva, opcional (hoje: copiar e-mail)
- `assets/favicon.svg` — marca simples, sem dependência de serviço externo
- `architecture_docs/` — spec do projeto; nenhum arquivo daqui é importado pelo site
