# Notes about the packages used in the project:

`Redux-toolkit`: For some reasons:
 * I don't need to install a lot of packages to work with redux.
 * Provides good practices and default behavior of of the box.
 * Writing simpler code especially because of using `immer library` which allows you to write immutable updates with mutative code like for examples `state.offers[0].name = 'some new name'`.
 
 `How Immer work?`: it applys all your mutations to a `draft` which is a proxy of your current state, and once you are doe with all your mutations, it produces a new state based on your changes.
 
`Redux-logger`: to keep tracking of dispatching actions and how they affect the state, so it can easily detect any issues happening during these actions

`styled-components`: makes code cleaner and easy to maintain because it's component based, also having the ability to write JS logic inside it to make it dynamic.


