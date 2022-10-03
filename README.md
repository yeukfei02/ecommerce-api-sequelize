# ecommerce-api-sequelize

ecommerce-api-sequelize

documentation: <https://documenter.getpostman.com/view/3827865/2s83tJFVPm>

## Requirement

- install yarn
- install node (v16+)

## Testing and run

```zsh
// test api in local
$ yarn run start:dev

// run in production
$ yarn run start:prod

// lint code
$ yarn run lint

// format code
$ yarn run format

// run test case
$ yarn run test

// create module
$ nest g module <module-name>

// create controller
$ nest g controller <controller-name>

// create service
$ nest g service <service-name>

// create migration file
$ npx sequelize-cli model:generate --name <model-name> --attributes <attr:type>

// run db migration
$ yarn run db:migrate

// undo db migration
$ yarn run db:migrate:undo

// check migrations status
$ yarn run db:migrate:status

// create seed file
$ npx sequelize-cli seed:generate --name <seed-name>

// seed data to database
$ yarn run db:seed
```

## Docker

```zsh
// build images and start container in one line
docker-compose up -d --build

// go inside container
docker exec -it <containerId> /bin/bash

// check container logs
docker logs <containerId>

// remove and stop container
docker-compose down
```

open localhost:3000
