# eslint-config-node-typescript 

Shareable config for [ESLint](https://eslint.org/), used in [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) projects at [BEEQUIP](https://beequip.nl).

## Installing

Install with yarn.

```shell
yarn add --dev eslint
yarn add --dev prettier
yarn add --dev @beequip/eslint-config-node-typescript
```

Or npm.

```shell
npm install --save-dev eslint
npm install --save-dev prettier
npm install --save-dev @beequip/eslint-config-node-typescript
```

## How to use

Create a new `.eslintrc.js` file in the root of your project with the following content:

```javascript
module.exports = {
    'extends': [
        '@beequip/eslint-config-node-typescript',
    ],
}
```

For an optimal experience, add a Prettier override by creating a `.prettierrc` file in the root of your project.

```javascript
{
    "tabWidth": 4,
    "printWidth": 80,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "es5"
}
```

## Further reading

For more information on shareable configs for ESLint, see the docs: https://eslint.org/docs/6.0.0/developer-guide/shareable-configs
