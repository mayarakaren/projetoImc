# Calculadora de IMC em React Native

Esta é uma aplicação simples desenvolvida em React Native que calcula o Índice de Massa Corporal (IMC) com base na altura e no peso inseridos pelo usuário.

## Arquitetura do Projeto

```
projetoImc/
├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── form/
│   │   └── title/
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── estudo.md
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

- **.expo/**: Diretório contendo arquivos de configuração do Expo.
- **assets/**: Diretório para armazenar recursos, como imagens, usados na aplicação.
- **node_modules/**: Diretório onde as dependências do projeto são instaladas.
- **src/**: Diretório raiz do código-fonte da aplicação.
  - **components/**: Diretório contendo componentes reutilizáveis da aplicação.
    - **form/**: Componente responsável pela lógica e apresentação do formulário de entrada de dados.
    - **title/**: Componente responsável pela apresentação do título da aplicação.

## Instruções de Uso

1. Certifique-se de ter o ambiente React Native configurado corretamente.
2. Clone este repositório em sua máquina local.
3. Navegue até o diretório do projeto.
4. Instale as dependências usando o comando `npm install` ou `yarn install`.
5. Execute a aplicação usando `npm start` ou `yarn start`.

## Recursos

- Permite que o usuário insira sua altura e peso.
- Calcula o IMC com base nos valores fornecidos.
- Fornece uma mensagem indicando o status do IMC (abaixo do peso, peso normal, sobrepeso, etc.).
- Permite redefinir os valores de altura e peso.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de recebimento caso encontre algum problema ou deseje melhorar este projeto.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Sinta-se à vontade para personalizar esse README de acordo com as características específicas do seu projeto.