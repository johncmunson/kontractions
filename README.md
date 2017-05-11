```
    __                    __                           __     _                        
   / /__  ____    ____   / /_   _____  ____ _  _____  / /_   (_)  ____    ____    _____
  / //_/ / __ \  / __ \ / __/  / ___/ / __ `/ / ___/ / __/  / /  / __ \  / __ \  / ___/
 / ,<   / /_/ / / / / // /_   / /    / /_/ / / /__  / /_   / /  / /_/ / / / / / (__  )
/_/|_|  \____/ /_/ /_/ \__/  /_/     \__,_/  \___/  \__/  /_/   \____/ /_/ /_/ /____/  
```

#### A small javascript library for converting to and fro' contractions.

## Install

`npm i --save kontractions` or `yarn add kontractions`

## Basic Usage

#### ES6
`import kontractions from 'kontractions'`

#### Node Modules
`const kontractions = require('kontractions')`

#### API
- `kontractions.contract(string)`: I did not do it. => i didn't do it.
- `kontractions.expand(string)`: I didn't do it. => i did not do it.  ||  I hope there's more food. => i hope (( there has || there is )) more food.
- `kontractions.updateContractions(object)`: object takes the form of... `{"they'd've": ['they would have']}`
- `kontractions.updateLongforms(object)`: object takes the form of... `{"they would have": "they'd've"}`

#### Defaults
- [Contractions](https://github.com/johncmunson/kontractions/blob/master/src/index.js)
- [Longforms](https://github.com/johncmunson/kontractions/blob/master/src/index.js)

## Contributions

All contributors will receive proper attribution, as outlined in the awesome [All-Contributors](https://github.com/kentcdodds/all-contributors) specification developed by open-source superstar [Kent C. Dodds](https://twitter.com/kentcdodds?lang=en).

## Development Setup

This project was bootstrapped with [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit). To get started with development, fork this repo and make edits to the `src` directory. Install dependencies with `npm install` or `yarn`. Run tests with `npm test`.

## License

*kontractions* is available under MIT. See LICENSE for more details.

## To-do
- Add option to enable 3-word+ contractions
