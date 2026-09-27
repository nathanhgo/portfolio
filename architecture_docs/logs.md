# Logs — Portfólio

Registro append-only. Só o que o git não conta.

## 2026-09-27 — Primeira versão do site

- Criada a página completa: apresentação, sete projetos reais (verificados nos repositórios), seção de
  demonstrações, formação e contato.
- Tokens e tipografia definidos em `assets/base.css`, iguais aos do repositório `demos`.
- Adotada a lista editorial em vez de cartões — decisão registrada em `visual.md 2.4` e `decisions.md`.
- `main.js` faz só uma coisa: copiar o e-mail. A página inteira funciona sem ele.
- Armadilha registrada: a seção de demonstrações fica propositalmente sem link real até o repositório
  `demos` ser publicado; não substituir por link falso.
- Correção de estilo: `table.simples` recebeu `table-layout: fixed` (mesma regra do repositório de
  demos) porque a tabela de duas colunas não cabia em 390 px sem estourar.
- Lição: print headless recorta a página e faz parecer texto cortado; a verificação que vale é
  `document.documentElement.scrollWidth` contra `innerWidth` em 390/375/320 px (medido: sem overflow).
