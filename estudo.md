### Primeiro App com React Native

# Organização das Pastas:

- `Assets`: 
    - É usada para armazenar recursos estáticos do aplicativo, como as imagens, fontes, arquivos de áudio ou vídeo, entre outros. Ao colocar os recursos nessa página é possível acessá-los facilmente.

- `Node_modules`: 
    - Contém todas as dependências do projeto, incluindo as bibliotecas e pacotes de terceiros utilizados no desenvolvimento do aplicativo. Essas dependências são instaladas automaticamente por meio do comando `npm install` e são listadas no arquivo "package.json".

- `App.js`:
    - O arquivo `App.js` é o ponto de entrada do aplicativo React Native. Ele desempenha um papel central na inicialização do aplicativo e na renderização da interface do usuário. É possível personalizar e editar este arquivo para criar o layout inicial do aplicativo, definir rotas, componentes e funcionalidades.

- `app.json`:
    - O arquivo `app.json` é um arquivo de configuração que contém informações sobre o aplicativo, como o nome, a versão, a descrição, as configurações de permissões, a orientação da tela, entre outros. É possível modificar esse arquivo de acordo com as necessidades específicas do aplicativo.

- `package-lock.json`:
    - O arquivo `package-lock.json` é gerado automaticamente quando as dependências do projeto são instaladas. Ele registra as versões específicas de todas as dependências e seus submódulos, garantindo que as versões corretas sejam usadas mesmo em instalações futuras. Esse arquivo ajuda a manter a consistência das dependências entre diferentes ambientes de desenvolvimento.

- `package.json`:
    - O arquivo `package.json` é um arquivo de manifesto que contém informações sobre o projeto, como nome, versão, scripts personalizados, dependências do projeto e outras configurações. Além disso, ele também fornece comandos úteis, como `npm start` para iniciar o servidor de desenvolvimento. Você pode atualizar esse arquivo para adicionar novas dependências, scripts ou configurar outras opções específicas do projeto.