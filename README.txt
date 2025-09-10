# BomDia Ofertas

Vitrine de Ofertas do Dia desenvolvida com **Next.js**.  
Mostra 21 produtos com imagens e links, em layout responsivo.

## Estrutura do Projeto

- `pages/` → Contém as páginas Next.js
  - `index.js` → Vitrine principal com 21 produtos
  - `_app.js` → Configuração global do Next.js (CSS)
  - `_document.js` → HTML base
- `public/images/` → Imagens dos produtos (`produto1.jpg` a `produto21.jpg`)
- `styles/globals.css` → Estilos globais
- `package.json` → Dependências e scripts do projeto

## Scripts

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Build para produção
npm run build

# Rodar produção local
npm start
