# heapi
> Hurricane Electric Free IPv6 Tunnel Broker API

[![Release](https://img.shields.io/github/release/honzahommer/heapi.svg)](https://github.com/honzahommer/heapi/releases/latest) &nbsp;
[![npm version](https://img.shields.io/npm/v/heapi.svg)](https://www.npmjs.com/package/heapi)  &nbsp; [![Build Status](https://img.shields.io/travis/honzahommer/heapi/master.svg)](https://travis-ci.org/honzahommer/heapi) &nbsp; [![devDependency Status](https://img.shields.io/david/dev/honzahommer/heapi.svg)](https://david-dm.org/honzahommer/heapi?type=dev) &nbsp; [![Meteor Atmosphere](https://img.shields.io/badge/meteor-honzahommer%3Aheapi-blue.svg)](https://atmospherejs.com/honzahommer/heapi)

## Install & Running

### The old way

```bash
git clone https://github.com/honzahommer/heapi.git
cd heapi
npm install
npm start
```


### PM2 (Node.js process manager)

```bash
git clone https://github.com/honzahommer/heapi.git
cd heapi
cp ecosystem.config.js.sample ecosystem.config.js
npm install
pm2 startOrRestart ecosystem.config.json
```

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Tests

```bash
npm test
```

## Endpoints

```bash
curl localhost:3000
curl localhost:3000/description
curl localhost:3000/serverv6
```
