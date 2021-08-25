# conflux-demo

Experimental implementation of Flux Pattern in React using Context, Hooks, Reducers.

Live demo is [here](https://conflux-demo.vercel.app/).

**Note:** This is just an experimental/educational project and not tested in any real project. Do not follow this blindly.

## Example Context Folder Structure

    src/contexts/auth
    ├── auth.actions.ts     // action creators
    ├── auth.context.ts
    ├── auth.effects.ts     // ultrasimple side effect (like takeEvery of redux-saga)
    ├── auth.hook.ts        // context accessor hook creation
    ├── auth.provider.ts
    ├── auth.reducer.ts
    ├── auth.state.ts       // initial state
    ├── auth.types.ts       // type declarations for actions, state etc.
    └── index.ts

## Adding a New Context
Let's assume we want to add new context named `theme`.

- Create new folder named `theme` in the folder `src/contexts` and change directory.
    - Declare your action and state types in the file `theme.types.ts`.
    - Declare your action creators in the file `theme.actions.ts`.
    - Declare your initial state in the file `theme.state.ts`.
    - Declare your reducer in the file `theme.reducer.ts`.
    - Declare your context using `React.createContext` in the file `theme.context.ts`.
    - Declare your context provider using `createContextProvider` in the file `theme.provider.ts`.
    - Declare your context accessor hook using `createContextHook` in the file `theme.hook.ts`.
    - Declare your sideeffects (if you need) in the file `theme.effects.ts`.
    - Import and export necessary things (types, actions, hook etc) in the file `index.ts`.
- Add your context provider to the component in the file `src/contexts/index.tsx`