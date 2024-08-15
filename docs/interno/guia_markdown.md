# Guia de Markdown

Markdown é uma linguagem de marcação que simplifica a escrita de HTML, de modo que utiliza códigos para similar tags html, muito utilizado para documentação técnica, quando o conteúdo e facilidade de contribuição é mais importante que estrutura e estilização. Este guia apresenta os principais elementos markdown que você precisa saber para contribuir com essa documentação.

## Cabeçalhos

Para construção de cabeçalhos utilize o caractere ´#´ 

```markdown
# Cabeçalho h1
## Cabeçalho h2
### Cabeçalho h3
#### Cabeçalho h4
##### Cabeçalho h5
###### Cabeçalho h6
```

**Saída:**

# Cabeçalho h1
## Cabeçalho h2
### Cabeçalho h3
#### Cabeçalho h4
##### Cabeçalho h5
###### Cabeçalho h6

## Listas

Para criar listas, utilize identações (tabs) e letras, números ou pontos:

```markdown
Lista 1:
- Item 1
- Item 2
- Item 3
  - SubItem

Lista 2:
1. Item 1
2. Item 2
3. Item 3
  - SubItem
```

**Saída:**

Lista 1:
- Item 1
- Item 2
- Item 3
  - SubItem

Lista 2:
1. Item 1
2. Item 2
3. Item 3
   - SubItem

## Links

Para adicionar Links, utilize o combo ´[Texto descritivo](url)´

```markdown
[Minha Mensagem de Link](https://meu-link-aleatorio.com.br)
```

**Saída:**

[Minha Mensagem de Link](https://meu-link-aleatorio.com.br)


## Imagens

Para adicionar uma imagem é semelhante aos links, adicione porém um exclamação no início ´![alt_text](url ou caminho da imagem)´

´´´markdown
Imagem da web

\![Minha imagem da web]\(https://avatars.githubusercontent.com/u/151544350?s=48&v=4)

Imagem local

\![Minha imagem local]\(../../docs/assets/logo.png)
´´´

**Saída:**

Imagem da web

![Minha imagem da web](https://avatars.githubusercontent.com/u/151544350?s=48&v=4)

Imagem local

![Minha imagem local](../../docs/assets/logo.png)