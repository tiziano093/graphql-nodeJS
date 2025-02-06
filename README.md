# GraphQL NodeJS Showcase

Questa repository serve come showcase per dimostrare competenze DevOps, con un flusso CI/CD completo che include testing, build, pubblicazione delle immagini Docker e deployment su Google Cloud Run.

## 📜 Funzionalità

- **GraphQL Server**: Implementazione di un server GraphQL.
- **CI/CD con GitHub Actions**:
  - Installazione e test
  - Build e pubblicazione della Docker image
  - Deploy automatico su Google Cloud Run
- **Versioning con Lerna**: Gestione delle versioni e rilascio automatico
- **Linting e Formattazione**: ESLint e Prettier
- **Git Hooks con Husky**: Controllo della qualità del codice nei commit

## 🚀 Configurazione

### Prerequisiti
- **Node.js** (>= 18.x)
- **Docker**
- **Google Cloud CLI**

### Installazione

```sh
npm install
```

### Avvio in locale

```sh
npm run start
```

## 🔄 Workflow CI/CD

La repository include tre workflow GitHub Actions:

1. **Install e Test**
2. **Build e Publish della Docker Image**
3. **Deploy su Google Cloud Run**

## 🤝 Contributing

Contribuire a questa repository è benvenuto! Segui questi passi:

1. **Fork** della repository
2. **Crea un branch** per la tua feature
3. Assicurati di eseguire:
   ```sh
   npm run lint && npm run test
   ```
4. Effettua il commit seguendo le [conventional commits](https://www.conventionalcommits.org/)
5. Apri una **pull request**

## 🛠 Comandi Utili

- **Lint e Fix**: `npm run lint`
- **Formatta il codice**: `npm run prettier`
- **Esegui i test**: `npm run test`
- **Versioning con Lerna**: `npx lerna version --conventional-commits`

## 📄 Licenza

Questo progetto è distribuito sotto la licenza MIT.

