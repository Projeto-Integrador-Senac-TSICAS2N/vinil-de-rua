# Loja de Vinil - Estrutura do Projeto

Este documento descreve a **estrutura de pastas e arquivos** do projeto "Loja de Vinil", explicando para que serve cada parte. A ideia é que qualquer pessoa, mesmo iniciante, consiga entender.

---

## 📂 Estrutura geral do projeto

```
loja-vinil/
├─ docs/               # Documentação do projeto (guia, anotações)
├─ git/                # Arquivos de controle do Git (versionamento)
├─ public/             # Arquivos públicos, acessíveis pelo navegador
│  ├─ pages/           # Páginas HTML do site
│  │  ├─ home/
│  │  │  └─ index.html
│  │  ├─ catalogo/
│  │  │  └─ index.html
│  │  ├─ oferta/
│  │  │  └─ index.html
│  │  ├─ formulario/
│  │  │  └─ index.html
│  │  ├─ pagamento/
│  │  │  └─ index.html
│  │  └─ produtos/
│  │     └─ index.html
│  └─ assets/          # Arquivos de apoio (CSS, JS, imagens, ícones, fontes)
│     ├─ css/
│     ├─ js/
│     ├─ images/
│     ├─ favicon/
│     ├─ fonts/
│     ├─ icons/
│     └─ videos/
├─ src/                # Código-fonte do projeto (JS, CSS e assets que serão processados)
│  ├─ assets/
│  └─ js/
│     ├─ carrinho.js
│     ├─ checkout.js
│     ├─ filtros.js
│     ├─ formulario.js
│     ├─ main.js
│     └─ menu-toggle.js
├─ design/             # Arquivos de design (UI, protótipos Figma, imagens de referência)
│  ├─ ui/
│  └─ assets/
├─ app/                # Backend em PHP
│  ├─ controllers/
│  │  └─ produtos.php
├─ database/           # Banco de dados e scripts SQL
│  └─ produtos.sql
```

---

## 📖 Descrição de cada pasta e arquivo

### 1. `docs/`
- Contém a documentação do projeto:  
  - Guia de estilo  
  - Explicação de cores e fontes  
  - Anotações sobre funcionalidades

### 2. `git/`
- Arquivos de versionamento Git (controle de histórico do projeto).

### 3. `public/`
- Tudo que é **acessível pelo navegador**.  
- **HTML, CSS, JS, imagens, fontes e vídeos** ficam aqui.

#### 3.1 `public/pages/`
- Contém todas as páginas HTML, cada uma em sua pasta:  
  - `home/index.html` → página inicial  
  - `catalogo/index.html` → página de produtos  
  - `oferta/index.html` → promoções  
  - `formulario/index.html` → contato ou cadastro  
  - `pagamento/index.html` → tela de checkout  
  - `produtos/index.html` → detalhes dos produtos  

#### 3.2 `public/assets/`
- Arquivos de apoio para todas as páginas:  
  - `css/` → arquivos de estilo (reset, main, responsivo, estilos por página)  
  - `js/` → scripts gerais e específicos (menu-toggle, carrinho, filtros, checkout)  
  - `images/` → imagens de produtos, banners e logos  
  - `favicon/` → ícones do site  
  - `fonts/` → fontes usadas no site  
  - `icons/` → ícones gráficos (SVG, PNG)  
  - `videos/` → vídeos exibidos no site  

### 4. `src/`
- Código-fonte do projeto, que depois pode ser processado/compilado para o `public/`.  
- Possui subpastas de `assets` e `js` com scripts específicos:  
  - `carrinho.js` → adiciona produtos ao carrinho  
  - `checkout.js` → lógica do pagamento  
  - `filtros.js` → filtros de catálogo  
  - `formulario.js` → validação de formulários  
  - `main.js` → scripts gerais do site  
  - `menu-toggle.js` → abre/fecha o menu no mobile

### 5. `design/`
- Arquivos de design, protótipos, UI e imagens de referência para o site.

### 6. `app/`
- Backend PHP do site:  
  - `controllers/` → lógica de negócio, como `produtos.php` que busca produtos do banco  

### 7. `database/`
- Scripts SQL que criam e populam tabelas do banco de dados, como `produtos.sql`.  

---

## ⚡ Fluxo do projeto

1. Usuário acessa **HTML em `public/pages`**  
2. HTML chama **CSS e JS em `public/assets`**  
3. JS pode fazer requisições ao **backend PHP (`app/`)**  
4. PHP acessa o **banco de dados (`database/`)** e retorna informações  
5. JS recebe dados e atualiza a tela dinamicamente  

---

## 📌 Dicas para iniciantes

- Sempre mantenha as **páginas HTML em `pages/`**  
- Coloque **todos os arquivos de estilo, scripts e imagens em `assets/`**  
- Use caminhos relativos como `../assets/css/main.css` para chamar CSS/JS  
- Organize o backend em `app/` e o banco em `database/`  
- Use `README.md` para documentar alterações, estrutura e regras do projeto
