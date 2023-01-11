FROM node:18
# ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# CMD [ "node", "src/index.js" ]
# EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
CMD ["npm", "start"]
