# Deploy — Portfólio

Alvo: **Cloudflare Pages** (plano gratuito permite uso comercial, banda ilimitada).

## Pré-requisitos

Domínio registrado (sugestão: Registro.br, `.com.br`, cerca de R$ 40/ano) e conta Cloudflare.

- **Build command**: nenhum (site estático). Se a Cloudflare exigir, use `echo sem build`.
- **Output directory**: `/`

## Passo a passo

1. Subir o repositório para o GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → escolher o repositório.
3. Framework preset: **None**; sem build; output `/`.
4. Publicar e abrir o endereço `*.pages.dev`.
5. Custom domains → adicionar o domínio raiz e `www`. Se o DNS não estiver na Cloudflare, criar os
   registros CNAME indicados.
6. Apontar o subdomínio das demos (`demos.<dominio>`) para o projeto do repositório `demos`.

## Números do plano gratuito (verificados na documentação, 27/09/2026)

- 500 builds/mês · 100 domínios por projeto · 20.000 arquivos · 25 MiB por arquivo.
- Arquivo estático: requisições grátis e ilimitadas. Sem restrição de uso comercial.
- **Formulário de contato**: em site estático não existe endpoint. Duas saídas, sem trocar de stack:
  1. Pages Function (`functions/contato.js`) — consome a cota do Workers Free: 100.000 req/dia, e o
     envio de e-mail fica a cargo de uma API externa (Resend/Brevo têm faixa gratuita).
  2. Serviço de formulário (Formspree/Web3Forms) — um `action` no `<form>`, sem backend próprio.

## Checklist após publicar

- [ ] abrir no celular e conferir tipografia, toque e tempo de abertura
- [ ] conferir o cartão de link (Open Graph) colando a URL no WhatsApp
- [ ] conferir favicon na aba do navegador
- [ ] abrir todos os links de projeto
- [ ] conferir HTTPS no domínio raiz e em `www`
- [ ] conferir que a página abre sem JavaScript (bloquear JS no navegador)
