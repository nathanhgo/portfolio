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

## Checklist após publicar

- [ ] abrir no celular e conferir tipografia, toque e tempo de abertura
- [ ] conferir o cartão de link (Open Graph) colando a URL no WhatsApp
- [ ] conferir favicon na aba do navegador
- [ ] abrir todos os links de projeto
- [ ] conferir HTTPS no domínio raiz e em `www`
- [ ] conferir que a página abre sem JavaScript (bloquear JS no navegador)
