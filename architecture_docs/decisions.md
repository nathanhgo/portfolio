# Decisões — Portfólio

## D1 — Página estática escrita à mão, sem framework (2026-09-27)

O site é uma página. Framework aqui adiciona build, dependências e uma cadeia de atualização sem
entregar nada em troca. HTML final é o que o navegador lê, e é o que qualquer pessoa consegue manter
daqui a dois anos.

**Descarta**: Next.js, Astro, Vite, Tailwind, bibliotecas de animação.

## D2 — Mesma base visual do repositório de demos (2026-09-27)

Portfólio e demos compartilham tokens, tipografia e tratamento de borda. É a prova visual de padrão
de trabalho e faz o visitante reconhecer a mesma mão nas duas páginas.

**Descarta**: identidade diferente por projeto, tema escuro alternativo, "reinventar" o CSS aqui.

## D3 — Conteúdo direto no HTML, sem JSON e sem CMS (2026-09-27)

O conteúdo muda de forma pontual (projeto novo, texto revisado). Um `index.html` legível é mais
simples de revisar do que um pipeline de dados para sete projetos.

**Descarta**: gerador de site, arquivo de conteúdo separado, CMS externo.

## D4 — Zero JavaScript obrigatório (2026-09-27)

Todo conteúdo e navegação funcionam sem JS. O único script é uma conveniência (copiar e-mail) com
alternativa visível (o endereço está escrito na página).

**Descarta**: renderização de conteúdo por JS, dependência de biblioteca de terceiros, analytics.

## D5 — Contato apenas e-mail e GitHub (2026-09-27)

Telefone pessoal e endereço residencial não vão para uma página pública indexável. Recrutador e
cliente conseguem contato pelos dois canais.

**Descarta**: formulário com backend, telefone, endereço, link de rede social sem uso real.
