# Stack — Portfólio

Atualizado em: 2026-09-27. Fonte da verdade sobre o que existe hoje (Real) e o que é plano.

## Real (implementado hoje)

| Camada | O que é | Onde |
|---|---|---|
| Página | HTML estático, escrito à mão, uma página com seções ancoradas | `index.html` |
| Estilo | CSS puro com tokens em `:root` (cor, tipo, espaço, raio) | `assets/base.css` |
| Comportamento | JS opcional de melhoria progressiva (copiar e-mail) | `assets/main.js` |
| Marca | Favicon SVG simples gerado localmente | `assets/favicon.svg` |
| Fontes | Google Fonts (Fraunces, Source Sans 3, JetBrains Mono) com `preconnect` e fallback de sistema | `index.html` |
| Metadados | Title, description, Open Graph, `color-scheme`, `lang="pt-BR"` | `index.html` |
| Hospedagem | **Ainda não publicado.** Alvo: Cloudflare Pages | `architecture_docs/deploy.md` |

## Aspiracional (planejado, não implementado)

- Publicação em domínio próprio (`seudominio.com.br`) com o repositório de demos em
  `seudominio.com.br/demos/`.
- Imagem de Open Graph própria (hoje o cartão de link usa só título e descrição).
- Página de um projeto específico, caso algum projeto precise de mais espaço que a lista.
- Versão em inglês, se a busca por oportunidade fora do país acontecer.

## Descartado (e por quê)

- **Next.js / Astro / qualquer framework**: uma página estática não justifica build, `node_modules` e
  uma cadeia de atualizações para manter.
- **Tailwind**: o CSS final aqui é menor que o arquivo de configuração do Tailwind.
- **Bibliotecas de UI e de animação**: produzem exatamente o visual genérico que `visual.md` proíbe e
  adicionam JS que a página não precisa.
- **Vercel (plano gratuito)**: os termos restringem o plano gratuito a uso não comercial e este site
  é vitrine de um serviço comercial.
- **Tema escuro/roxo de portfólio de dev**: padrão saturado, sem relação com a identidade escolhida.
- **Analytics de terceiros**: nenhum script de rastreamento. Se um dia houver medição, será algo sem
  cookie e declarado na página.
