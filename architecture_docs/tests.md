# Testes — Portfólio

Projeto estático de uma página: o "teste" é a verificação que qualquer pessoa pode repetir.

## O que significa "pronto"

1. **Abre sem servidor**: `index.html` funciona com duplo clique (nenhum recurso por caminho
   absoluto, nada depender de servidor local).
2. **Funciona sem JavaScript**: com JS desligado, todo conteúdo continua visível e todos os links
   funcionam (o JS só adiciona copiar-e-mail).
3. **Sem erro de console** no navegador.
4. **Checagem de estrutura** (sem ferramenta externa, feita na revisão):
   - [ ] todo link de projeto responde (abrir cada um)
   - [ ] `title`, `description` e Open Graph preenchidos e sem texto genérico
   - [ ] favicon aparece na aba
   - [ ] nenhum `TROCAR:` esquecido em texto visível
   - [ ] nenhum emoji, nenhum placeholder de Lorem, nenhum depoimento inventado
5. **No celular**: emulador em 390×844, textos legíveis, botões com alvo de toque, nada estourando a
   largura horizontal.

## O que fica de fora da automação (e por quê)

Contraste, hierarquia tipográfica e qualidade do texto não se automatizam neste tamanho de projeto —
são revisados a olho, com o checklist acima, porque é isso que o visitante julga. Se o site crescer
para várias páginas, entra `html-validate` e um verificador de links em Node.

## Riscos conhecidos

- Links de projeto podem morrer (repositório renomeado). O checklist semestral em `mvp.md` existe por
  isso.
- Google Fonts depende de rede externa; o fallback de sistema garante leitura mesmo se falhar.
