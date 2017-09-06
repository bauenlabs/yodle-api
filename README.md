# Yodle API

[![Greenkeeper badge](https://badges.greenkeeper.io/bauenlabs/yodle-api.svg)](https://greenkeeper.io/)
[![CirlceCI Badge](https://circleci.com/gh/bauenlabs/yodle-api.svg?style=shield&circle-token=:circle-token)](https://circleci.com)
[![Dependency Status](https://david-dm.org/bauenlabs/yodle-api/master.svg)](https://david-dm.org/bauenlabs/yodle-api/master)
[![devDependency Status](https://david-dm.org/bauenlabs/yodle-api/master/dev-status.svg)](https://david-dm.org/bauenlabs/yodle-api/master#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/bauenlabs/yodle-api/badge.svg)](https://snyk.io/test/github/bauenlabs/yodle-api)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This repository contains the API that powers Yodle.

## Requirements
 * Node.js (see .nvmrc for correct version).
 * Yarn

## Setup
 * Clone this repository.
 * In this repository's root folder, run `yarn`.

## Testing & Linting
This project uses [Jest](https://facebook.github.io/jest/), [ESlint](https://github.com/eslint/eslint) with the [AirBnb standard](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), and [Prettier](https://github.com/prettier/prettier) for testing, linting, and formatting.

 * All test files are suffixed with `.test.js`.
 * To run tests: `yarn test`.
 * To lint this codebase, run: `yarn lint`.
 * To format this codebase, run: `yarn prettier`.
 * To validate flow typing, run: `yarn flow`.
 * NOTE: lint and prettier will be run before a commit is made.

## Building
To build this project, simply run `yarn build`.

This project isn't published to NPM, this step simply adds `npm publish` between semantic-release pre/post commands.
