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

## 2026-09-29 — correções da auditoria de marketing

Auditoria de SEO/CRO/copy aplicada (relatório em `~/Documentos/CodeInProgress/analises/auditoria-marketing-2026-09-28.md`).

- WhatsApp como contato primário no herói, no contato e no orçamento (12) 99764-0390
- As três demos no ar passaram a ser linkadas na seção "páginas para negócios"
- Herói, título e descrição falando com dono de comércio, não com recrutador
- Seção de negócios subiu para logo depois do herói; lista de ferramentas encolheu de 20 para 10
- FAQ novo (prazo e "já tenho Instagram"); JSON-LD com telefone, `Service` e `areaServed`
- Fontes servidas do próprio site (Google Fonts removido); `width`/`height` em todas as imagens dos carrosséis
- Corrigido no teste: o H1 não trocava de idioma (faltava `data-i18n`) e era longo demais
