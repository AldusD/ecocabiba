FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
# Use npm ci when a lockfile exists for reproducible installs; fallback to npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

EXPOSE 3000

CMD ["npm", "start"]