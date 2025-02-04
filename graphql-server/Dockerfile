# Usa Node.js 18 su Alpine Linux
FROM node:18-alpine

# Imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia il file .npmrc autenticato dal sistema host
COPY .npmrc .npmrc

# Copia il file package.json e package-lock.json
COPY ./graphql-server/package.json ./

# Installa solo le dipendenze di produzione
RUN npm install --omit=dev

# Rimuovi il file .npmrc per sicurezza
RUN rm -f .npmrc

# Copia il codice sorgente del pacchetto graphql-server
COPY ./graphql-server ./

# Espone la porta 4000 per il server GraphQL
EXPOSE 4000

# Comando per avviare il server
CMD ["node", "index.js"]