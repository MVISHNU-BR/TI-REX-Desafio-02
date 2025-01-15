# TI-REX: Compass UOL Challenge

Este projeto tem como objetivo recriar três páginas de uma ferramenta de produtividade. Seguindo os padrões de design fornecidos, utilizamos tecnologias modernas como **HTML**, **CSS**, **TypeScript**, **React**, **Tailwind CSS**, e outras bibliotecas necessárias para garantir a fidelidade ao design e funcionalidades do sistema

## 🚀 Tecnologias Utilizadas

<div align="left">
</div>
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
    <img src="https://camo.githubusercontent.com/9a89e902a11c3a21f2e6d641460318739486a140336f5f30d24872a0a61faefb/68747470733a2f2f696d616765732e636c65726b2e636f6d2f7374617469632f6c6f676f2d6c696768742d6d6f64652d343030783430302e706e67" height="40" alt="github logo"  /> 
</div>

## 📝 Requisitos:

### Requisitos Técnicos
- Utilizar **HTML**, **CSS**, **Typescript**, **React** e **TailwindCSS**.
- Usar **Clerk** para autenticação de usuários.
- Implementar **React Router** e proteger as rotas.
- Utilizar **JSON Server** para simulação de banco de dados.
- Validação de formulários feita manualmente (sem bibliotecas de validação).

### Requisitos Funcionais
1. **Cadastro e Login:**
   - Cadastro com nome, sobrenome, e-mail, cargo, senha e redes sociais.
   - Login com e-mail e senha validados.
2. **Kanban:**
   - 3 colunas de tarefas com scroll vertical.
   - Adicionar novas tarefas via modal.
   - Mostrar título, prioridade, barra de progresso e membros no card.
   - Mostrar indicadores de total de tarefas em cada coluna.
3. **Modal de Criação de Tarefas:**
   - Título, descrição, status, prioridade, data inicial e final, e imagem.
   - Validar dados ao submeter o modal.
4. **Responsividade:**
   - Garantir adaptabilidade para mobile, tablet e desktop.
5. **Navbar:**
   - Links para Home, Settings, Profile com interações definidas.
6. **Zoom no Kanban:**
   - Zoom interativo no quadro Kanban, com suporte a scroll e gestos.
7. **Rodapé:**
    - Links de redes sociais com hover e redirecionamento.
9. **Perfil:**
    - Exibir informações do usuário: nome, usuário, contato e detalhes do JSON.
    - Última Atividade: Texto estático com informações randômicas.
    - Relatório Semanal: Listar todas as tarefas associadas ao usuário e o tempo total das mesmas.
10. **Página Não Encontrada**
- Exibir mensagem para páginas inexistentes.
- Link “Go back to home” redireciona para a tela inicial.
11. **Página Bloqueada**
- Exibir tela bloqueada caso o usuário não esteja autenticado e tente acessar o Kanban.
- Link “Log in” redireciona para a página de login.

#### Requisitos Opcionais
- **View All Users:** Página com lista de usuários cadastrados (nome, foto e cargo).
- **Campo "Add People" no Modal:** Implementar busca funcional para adicionar pessoas ao card (pesquisar no JSON de usuários).
- **Colunas Arrastáveis no Kanban:** Permitir que os cards sejam arrastados entre as colunas (de “to do” para “in progress” ou “done”) e registrar essa ação na API.

## ⚙️ Estrutura das Páginas

- **Home**: Página inicial com botões para login, cadastro e inscrição na newsletter.
- **Login**: Formulário para autenticação do usuário com validações de e-mail e senha.
- **Cadastro**: Formulário para criação de um novo usuário com validações específicas.
- **Kanban**: Página principal com a gestão das tarefas, contendo colunas interativas e modais para criação de tarefas.
- **Perfil**: Exibição dos dados do usuário, incluindo informações de contato e atividades recentes.
- **Página Não Encontrada**: Exibida para rotas inexistentes, com redirecionamento para a páginainicial.
- **Página Bloqueada**: Tela exibida quando o usuário não está autenticado, com redirecionamento para login.

### 🚦Rotas da Aplicação

|       Rota            |    Método    |                  Descrição                          | 
| --------------------- | ------------ | --------------------------------------------------  | 
| `http://localhost:5173/login`         |  GET     |  Página de login, onde o usuário insere suas credenciais para autenticação. | 
| `http://localhost:5173/register`      |  GET     |  Página de cadastro de novos usuários. | 
| `http://localhost:5173/kanban`        |  GET     |  Página principal do Kanban com gestão de tarefas. Acesso restrito a usuários autenticados. | 
| `http://localhost:5173/profile`       |  GET     |  Página de perfil do usuário com informações e atividades recentes. | 
| `http://localhost:5173/404`           |  GET     |  Página não encontrada. Exibida quando o usuário tenta acessar uma rota inexistente. | 
| `http://localhost:5173/403`           |  GET     |  Página bloqueada, exibida quando um usuário não autenticado tenta acessar uma área restrita. | 

## 📁 Estrutura do Projeto

```
.
├── public
├── src
│   ├── assets          # Arquivos estáticos como imagens
│   ├── components      # Componentes reutilizáveis
│   ├── lib             # Bibliotecas e códigos auxiliares
│   ├── pages           # Páginas principais da aplicação
│   ├── Routes          # Configuração das rotas da aplicação
│   ├── services        # Serviços e integrações com APIs
│   ├── types           # Tipos TypeScript compartilhados
│   ├── index.css       # Arquivo principal de estilo
│   ├── main.tsx        # Arquivo de entrada principal
│   └── vite-env.d.ts   # Tipos de ambiente do Vite
├── .env                # Variáveis de ambiente
├── .eslintrc.json      # Configuração do ESLint
├── index.html          # HTML principal
├── tailwind.config.js  # Configuração do Tailwind CSS
├── postcss.config.js   # Configuração do PostCSS
├── package.json        # Dependências do projeto
├── tsconfig.json       # Configuração do TypeScript
├── tsconfig.app.json   # Configuração específica para a aplicação
├── tsconfig.node.json  # Configuração específica para Node.js
├── vite.config.ts      # Configuração do Vite
├── LICENSE             # Licença do projeto
└── README.md           # Documentação do projeto
```



## 📝 Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente:

## Como Executar o Projeto
1. Clone este repositório:

```bash
git clone [URL_DESSE_REPOSITORIO]
```

2. Navegue até a pasta do projeto:

```bash
cd [NOME_DA_PASTA]
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse o projeto no navegador:

```
http://localhost:5173
```

   
### ✒️ Desenvolvedores

Time de colaboradores do Squad Umbrella responsáveis desenvolvimento do projeto:


| [<img src="https://media.licdn.com/dms/image/v2/D4D03AQFLCVf6RWog3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718293667599?e=1742428800&v=beta&t=T-0IyCAhz0uemmeTemdfMUZdYRcLMCZ0mXNPD5aMtYs" width=115><br><sub>Gerson Miranda</sub>](https://www.linkedin.com/in/gersonjrr/) | [<img src="https://media.licdn.com/dms/image/v2/D4D03AQE0F6qxQELnUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730361381279?e=1742428800&v=beta&t=1wdyJmZtkG1BxGC1y0we87Kzadd_BMdWvq0mRTpevsY" width=115><br><sub>Maiara Lira</sub>](https://www.linkedin.com/in/maiaraslira/) | [<img src="https://media.licdn.com/dms/image/v2/D4D03AQET5ifyetl9Ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719265306593?e=1742428800&v=beta&t=YNZmfFqU_uqBH58HJlby7hKPBDbAEo2jnnyc88FYYO0" width=115><br><sub>Mateus Mattos</sub>](https://www.linkedin.com/in/mateusmattosbarreto/) |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://media.licdn.com/dms/image/v2/D4D03AQHJ0OCH7pFHUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684282731866?e=1742428800&v=beta&t=i1iC8d8abyy3Z-HxKRmE-2fyTJJMQFXA1l65K6vp468" width=115><br><sub>Mahavishnu Jneesh Afonso</sub>](https://www.linkedin.com/in/vishnujneesh/) | [<img src="https://media.licdn.com/dms/image/v2/D4D03AQHrzmkq4eC8Jg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718487658410?e=1742428800&v=beta&t=lOyy9CJ8Eudzwp12S2Y7UHxwqXCSDp1C5spdx1Xm6DE" width=115><br><sub>Renan Casaes</sub>](https://www.linkedin.com/in/renndev/) | [<img src="https://media.licdn.com/dms/image/v2/D4E03AQHSe5QzvWITMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730251067698?e=1742428800&v=beta&t=DP2cQhh0VWXRnKQ_sraABqNvTqgpEN9HhsXAjEVI-HA" width=115><br><sub>Rozvania Alcantara</sub>](https://www.linkedin.com/in/rozvania/) |


###  📜 Agradecimentos

Gostaríamos de agradecer  à **Compass UOL** por proporcionar essa oportunidade de aprendizado e por apoiar nosso desenvolvimento durante todo o programa.


![image](https://github.com/user-attachments/assets/731ed3ca-0334-42a4-833f-b155791970aa)



Um agradecimento especial aos instrutores **Jailson de Souza**, **Liliv Vasconcelos**, **Isabelle Hondo** e **Vivian Oliveira** por sua dedicação, paciência e por compartilharem seus conhecimentos de forma tão generosa. Vocês foram fundamentais para nosso crescimento pessoal e profissional.

Este projeto é resultado de um ambiente inspirador e de uma experiência de aprendizado verdadeiramente transformadora.




   
