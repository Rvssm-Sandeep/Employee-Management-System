# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /empmanagement
COPY . .
RUN npm install --production
CMD ["node", "backend/index.js"]
EXPOSE 5000