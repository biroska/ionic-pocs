# ionic-pocs

É um projeto de estudo do framework Ionic utilizando Angular Material, Routers, Formulários Responsivos e acesso a recursos nativos do aparelho celular.

# Problemas Conhecidos

  - A navegação do menu funciona apenas no primeiro acesso a funcionalidade, depois disso o app deve ser recarregado;
  - O modo *'linear'* do stepper não está funcionando;

# Recursos disponíveis e implementações

  - Utilização de rotas filhas com lazy loading;
  - Utilização de *"AuthGuard"* para evitar que usuários não logados acessem a aplicação;
  - Leitura da impressão digital, quando o aparelho oferece o recuros, para fazer login;
  - Formulários responsivos;
  - Utilizando os componentes do Angular Material;
  - Uso do ngx-angular-ionic para aplicar máscaras nos input fields;

# Execução
  - Fazer checkout do aplicativo;
  - Realizar *"npm install"*
  - Para logar, basta criar uma nova senha na funcionalidade *"Esqueci minha senha"*;

# Estrutura do aplicativo

## Rotas

| Path | Função |
| ------ | ------ |
| /login | Página de login da aplicação |
| /login/esqueci-senha | Página para cadastrar uma nova senha |
| /menu | Acesso ao menu da aplicação |
| /menu/crud | Acesso a menu de CRUD da aplicação |
| /menu/crud/create-update | Acesso a página de insersão e edição de dados |

**Free Software, Hell Yeah!**
