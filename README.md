# Agência LM

## Sobre o projeto

Este projeto foi desenvolvido por meio de um trabalho voluntário, onde fui responsável por desenvolver desde a interface de usuário no Figma até a implementação e deploy. Trata-se de um site que oferta serviços de uma agênciad e marketing local.

## Dependências utilizadas no projeto

```json
"dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.14.16",
    "@mui/material": "^5.14.16",
    "framer-motion": "^10.18.0",
    "next": "latest",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-material-ui-carousel": "^3.4.2",
    "tss-react": "^4.9.3"
  },
```

## Estrutura do projeto

- `./pages` contém todas páginas que serão roteadas pelo NextJS
    - `./pages/agency`
        - `./pages/agency/about`
        - `./pages/agency/contacts`
        - `./pages/agency/portfolio`
    - `./pages/index`
- `./public` conté todas as imagens utilizados no desenvolvimento do layout
- `./src` contém as peças e utilitários essenciais para composição e funcionamento do projeto
    - `./src/components`
    - `./src/templates`
    - `./src/utils`
    - `./src/theme` arquivo que define o tema do projeto, utilizando o [Material UI]()
- `./src/styles` contém todos os estilos abstraídos dos componentes

## Como me localizar no projeto?

- A estrutura de roteamento é definida no diretório `./pages`, então o `./pages/index.js` é a página home do projeto, ou seja, o `/`.
- O diretório `./pages/agency` cria um o endpoint que poderá redirecionar o usuário para os arquivos localizados dentro da pasta. Funciona assim (exemplificando com o `http://localhost:3000`):
    - `http://localhost:3000/` é o index
    - `http://localhost:3000/agency/About` endpoint para `./pages/agency/About`
    - `http://localhost:3000/agency/Contacts` endpoint para `./pages/agency/Contacts`
    - `http://localhost:3000/agency/Portfolio` endpoint para `./pages/agency/Portfolio`
- Você pode ler mais sobre esse sistema de roteamento na documentação do [NextJS](https://nextjs.org)

## Link do site

O deploy do projeto foi feito no Vercel, pode acessá-lo em [Agência LM](https://pagina-sm-next-apqvbc3ph.vercel.app)