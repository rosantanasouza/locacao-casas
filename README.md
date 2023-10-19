# Locação de casas

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Locação de casas**
| :label: Tecnologias | Angular, npm, Typescript
| :fire: Desafio     | https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://via.placeholder.com/1200x500.png?text=imagem+lindona+do+meu+projeto#vitrinedev)

## Detalhes do projeto

Projeto criado para treinar habilidades de desenvolvimento de software utilizando o framework Angular. Esse projeto foi realizado junto com o tutorial no canal oficial do Angular no Youtube.

## Tecnologias utlizadas

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Node.js](https://nodejs.org/en)
- [Angular](https://angular.io/)
- [Git](https://git-scm.com/downloads)


## Executando o projeto
Antes de seguir o passo a passo para executar o projeto na sua máquina, é necessário ter instalado os seguintes softwares:

- [Node.js](https://nodejs.org/en)
- [Angular](https://angular.io/)
- [Git](https://git-scm.com/downloads)

## Parte 1: 

1.1 - Clone o projeto
```bash
    git clone https://github.com/rosantanasouza/locacao-casas.git
```

1.2 - Entre no diretório do projeto:
```bash
    cd locacao-casas
```

1.3 - Instale as dependências locais do projeto:
```bash
   npm install
```

1.4 - Execute o servidor local do Angular:
```bash
   npm run start
```

1.5 - Abra seu navegador com o seguinte endereço para visualizar a aplicação em execução:
```bash
   http://localhost:4200/
```

Apesar da aplicação já está em execução, percebe-se que os dados das casas não aparecem. Para ter todas as informações carregadas na aplicação, é necessário servir os dados do arquivo `db.json`, que é o arquivo que contém as informações das casas disponíveis. Iremos servi-lo simulando uma consulta a uma API com uma dependencia do npm chamada [json-server](https://www.npmjs.com/package/json-server).

## Parte 2:
Necessário instalar a seguinte dependencia do npm:

- [json-server](https://www.npmjs.com/package/json-server)

2.1 - Instale a dependencia `json-server` em modo instalação global do npm com o seguinte comando no `terminal`:
```bash
   npm install -g json-server
```

2.2 - Após instalar a dependencia `json-server`, dentro da pasta do projeto `locacao-casas`, execute o seguinte comando no `terminal`:
```bash
   json-server --watch src/app/database/db.json
```

2.3 - Para visualizar as informações do arquivo `db.json` no navegador, navegue até o endereço:
```bash
    http://localhost:3000/locations
```

2.4 - Agora, recarregue a página da aplicação gerada pelo Angular e veja todas as informações sendo carregadas na tela.