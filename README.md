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
- `kontractions.contract(string)`: I did not do it. => I didn't do it.
- `kontractions.expand(string)`: I didn't do it. => I did not do it.  ||  I hope there's more food. => I hope (( there has || there is )) more food.
- `kontractions.updateContractions(object)`: object takes the form of... `{"they'd've": ['they would have']}`
- `kontractions.updateLongforms(object)`: object takes the form of... `{"they would have": "they'd've"}`

## Contributions

All contributors will receive proper attribution, as outlined in the awesome [All-Contributors](https://github.com/kentcdodds/all-contributors) specification developed by open-source superstar [Kent C. Dodds](https://twitter.com/kentcdodds?lang=en).

## Development Setup

This component was bootstrapped with [React CDK](https://github.com/kriasoft/babel-starter-kit). To get started with development, fork this repo and make edits to the `src` directory.

## License

*kontractions* is available under MIT. See LICENSE for more details.
