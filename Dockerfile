# NodeJS image
FROM node:18.13-alpine

WORKDIR /build

## Install dependencies
COPY package.json /build/package.json
COPY package-lock.json /build/package-lock.json

RUN npm --prefix /build ci

COPY . /build/

RUN npm --prefix /build run openapi:generate
RUN npm --prefix /build run build
# npm run serve -- --build --port 80 --host 0.0.0.0
EXPOSE 80
CMD ["npm", "--prefix",  "/build", "run", "serve", "--", "--build", "--port", "80", "--host", "0.0.0.0"]