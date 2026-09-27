# Visual — Portfólio

Mesma disciplina do projeto Fortuna: primeiro o que **não** fazer (para não parecer "gerado por IA sem
revisão"), depois as escolhas confirmadas.

## 1. Restrições fixas — o que NÃO fazer

- **Gradiente roxo/azul** ou qualquer gradiente decorativo. Cor sólida, sempre.
- **Sombra difusa** em cartões e botões. Camadas se separam com borda fina, contraste e espaço.
- **Botão "pílula" em tudo** e cantos muito arredondados. Raio pequeno e deliberado.
- **Cartão com barra colorida na lateral** — assinatura visual de painel genérico.
- **Três cartões idênticos de "habilidades"** (ícone + título + frase). Habilidade é texto, não
  template.
- **Emoji** em qualquer lugar (inclusive em título de projeto ou lista de tecnologias).
- **Selos e badges animados de tecnologia** ("Python", "Go", "React" em caixinhas com ícone) como
  enfeite. A stack aparece como texto, ao lado do projeto.
- **Fonte default sem escolha** (Inter, Roboto, fonte de sistema). A escolha tipográfica é parte da
  identidade e está na seção 2.3.
- **Texto genérico de portfólio**: "apaixonado por tecnologia", "transformando ideias em código",
  "sempre em busca de novos desafios", "soluções inovadoras". Texto tem que dizer o que foi
  construído e com o quê.
- **Travessão em excesso** e pontuação arrastada. Frase direta.
- **Número de vaidade**: "+50 projetos", "5 anos de experiência", "100% de satisfação". Se o número
  não é verificável, não existe.
- **Depoimento, logo de cliente ou "trabalhei com"** sem ter acontecido.
- **Imagem de banco de imagens** (pessoa sorrindo, mesa de trabalho com café, tela com código verde).
  Sem foto real, a página não tem foto.
- **Metadados no default**: title genérico, favicon ausente, Open Graph vazio.
- **Tema escuro com roxo de "portfólio de dev"** e o hero com partículas/código caindo. Fora de
  escopo.

## 2. Decisões confirmadas

### 2.1 Identidade e coerência com as demos

O portfólio e o repositório de demonstrações usam **a mesma base visual** (tokens, tipografia,
tratamento de borda). Quem chega pelo portfólio e abre uma demo reconhece a mesma mão — isso é
intencional: é a prova de que existe um padrão de trabalho, não um site solto.

### 2.2 Paleta

| Token | Uso | Cor |
|---|---|---|
| `paper` | fundo principal | `#f6f4ef` |
| `paper-2` | fundo secundário, blocos de destaque | `#ebe7dd` |
| `ink` | texto principal | `#16150f` |
| `ink-soft` | texto secundário, metadados | `#5c594e` |
| `rule` | linhas e bordas | `#ddd8cc` |
| `accent` | link, destaque, botão | `#1e4d45` |

Sem exceção além disso. Nada de roxo, nada de gradiente, nada de cor de status.

### 2.3 Tipografia

- **Títulos**: Fraunces — serifada com personalidade, evita o visual "template de dev".
- **Texto**: Source Sans 3 — legível em blocos e em tamanhos pequenos.
- **Rótulos e metadados**: JetBrains Mono — usado só em rótulo de seção, ano, stack e números.

Nada mais. Sem quarta família, sem cinco pesos na mesma página.

### 2.4 Composição

Coluna única, largura máxima confortável de leitura, espaço em branco generoso, seções numeradas
(`01`, `02`, ...) separadas por borda fina. Projetos são **linhas de uma lista editorial**, não
cartões: nome, o que é, stack, ano e link. Sem grade de cards, sem sombra, sem hover exagerado.

### 2.5 Toque e acessibilidade

Alvo de toque mínimo de 48 px, contraste de texto acima de 4.5:1, foco visível em todos os links e
botões, `prefers-reduced-motion` respeitado, HTML semântico (um `h1`, seções com `h2`).

### 2.6 Tom de voz

Direto, técnico e concreto, em primeira pessoa. Cada projeto começa pelo problema que resolve, não
pela tecnologia. Sem adjetivo vendendo a si mesmo: o resultado e o repositório vêm antes do
entusiasmo.

### 2.7 Espaço reservado para as demos

A seção de demonstrações é escrita para o visitante de negócio local: explica em duas frases o que
são aquelas páginas e manda para a lista. Ela existe antes de existir demo publicada — com a frase
honesta de que a lista está em construção, e não com um cartão vazio fingindo conteúdo.
