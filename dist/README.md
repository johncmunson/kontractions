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
- `kontractions.contract(string)`: Converts a string containing longforms to a string containing contractions.
- `kontractions.expand(string)`: Converts a string containing contractions to a string containing longforms, or _the various possible longforms_.
- `kontractions.expandToList(string)`: Converts a string containing contractions to a list of strings containing all possible longforms.
- `kontractions.updateContractions(object)`: Accepts an object and can be used for extending, modifying, or disabling the built-in default contractions.
- `kontractions.updateLongforms(object)`: Accepts an object and can be used for extending, modifying, or disabling the built-in default longforms.

#### Examples
- `kontractions.contract("I did not do it.")` //=> i didn't do it.
- `kontractions.expand("I didn't do it.")` //=> i did not do it.
- `kontractions.expand("I hope there's more food.")` //=> i hope (( there has || there is )) more food.
- `kontractions.expandToList("I didn't do it.")` //=> [ 'i did not do it.' ]
- `kontractions.expandToList("I hope there's more food.")` //=> [ 'i hope there has more food.', 'i hope there is more food.' ]
- `kontractions.updateContractions({"they'd've": ['they would have']})` //=> The contraction _they'd've_ will now be recognized when using the `contract` method.
- `kontractions.updateLongforms({"they would have": "they'd've"})` //=> The longform _they would have_ will now be recognized when using the `expand` method.
- `kontractions.updateContractions({"they'd've": ['they would have']})` //=> Pass a falsy value to disable a contraction.
- `kontractions.updateLongforms({"they would have": false})` //=> Pass a falsy value to disable a longform.

#### Defaults
- [Contractions](https://github.com/johncmunson/kontractions/blob/master/src/index.js)
- [Longforms](https://github.com/johncmunson/kontractions/blob/master/src/index.js)

#### Philosophy
This library aims to do one thing and do it well. With regards to the `expand` method, while it would be possible to examine the context in which contractions are used to determine the proper expansion, that will likely remain beyond the scope of this package. Therefore, consumers will need to implement their own logic to examine the output and pick the correct expansion.

## Contributions

All contributors will receive proper attribution, as outlined in the awesome [All-Contributors](https://github.com/kentcdodds/all-contributors) specification developed by open-source superstar [Kent C. Dodds](https://twitter.com/kentcdodds?lang=en).

## Development Setup

This project was bootstrapped with [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit). To get started with development, fork this repo and make edits to the `src` directory. Install dependencies with `npm install` or `yarn`. Run tests with `npm test`.

## License

*kontractions* is available under MIT. See LICENSE for more details.

## To-do
- Add option to enable 3-word+ contractions
