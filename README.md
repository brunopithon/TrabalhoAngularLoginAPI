# Sobre o projeto

O projeto consiste em um sistema de login, onde recebe os dados de login de uma API externa, representada pelo db.json. 
No sistema é possível fazer o login através dos usuários já cadastrados na API ou criar novos usuários. Os usuários recém criados não consegue acessar a aplicação enquanto o administrador não ativar o seu login.


## Requisito para executar o programa em ambiente de desenvolvimento

- Atualizar os dados através do comando: `npm install` 
- Rodar uma api fake com os dados de login e senha: `json-server db.json`
- Executar o comando `ng serve` e abrir o `http://localhost:4200/` no navegador
