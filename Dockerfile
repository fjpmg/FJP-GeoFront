FROM node:8

WORKDIR /usr/src/app/
RUN mkdir -p /usr/share/nginx/html

RUN chown node:node ./ /usr/share/nginx/html
USER node

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

RUN GIT_DIR=. ./node_modules/.bin/bower install
RUN ./node_modules/.bin/ember build --output-path=/usr/share/nginx/html

VOLUME /usr/share/nginx/html
CMD [ "true" ]

