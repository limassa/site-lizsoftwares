# Liz Softwares - Site Institucional

Site institucional da Liz Softwares, software house especializada em desenvolvimento de soluções sob medida.

## Estrutura

```
site_lizsoftware/
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # Interatividade
├── assets/
│   └── logo.png    # Logo da empresa
└── README.md
```

## Como visualizar

1. Abra o arquivo `index.html` no navegador, ou
2. Use um servidor local, por exemplo:
   - **VS Code:** extensão "Live Server"
   - **Node.js:** `npx serve .`
   - **Python:** `python -m http.server 8000`

## Personalização

- **E-mail e WhatsApp:** edite os links em `index.html` na seção de contato
- **Conteúdo:** ajuste textos, produtos e serviços conforme necessário
- **Cores:** variáveis CSS no início de `styles.css`

## Tecnologias

- HTML5
- CSS3 (variáveis, Grid, Flexbox)
- JavaScript (ES6+)

---

## Publicar no GitHub (Git + GitHub Pages)

### 1. Criar o repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome sugerido: `site-lizsoftwares` ou `lizsoftwares-site`
3. Deixe **público** e **não** marque "Add a README" (o projeto já tem)
4. Clique em **Create repository**

### 2. Conectar e enviar o código

No terminal, na pasta do projeto:

```powershell
cd "d:\Negocios\site\site_lizsoftware"
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git branch -M main
git push -u origin main
```

Substitua `SEU_USUARIO` e `NOME_DO_REPO` pelo seu usuário e nome do repositório no GitHub.

### 3. Publicar com GitHub Pages

1. No repositório no GitHub, vá em **Settings** → **Pages**
2. Em **Source**, escolha **Deploy from a branch**
3. Em **Branch**, selecione `main` e a pasta `/ (root)`
4. Salve

Em alguns minutos, o site estará em: `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

Para usar domínio próprio (ex: lizsoftwares.com.br), configure em **Custom domain** nas Pages.
