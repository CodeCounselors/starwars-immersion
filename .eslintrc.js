module.exports =
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "indent": [ 2, "tab", { "SwitchCase": 1 } ],
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "prefer-template": 2,
    "react/jsx-filename-extension": 0,
    "react/jsx-indent": [2,'tab'],
    "react/jsx-indent-props": [2,'tab'],
    "react/jsx-no-target-blank": 0,
    "react/jsx-space-before-closing": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "require-yield": 0,
    "semi": [ 2, "never" ]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./internals/webpack/webpack.test.babel.js"
      }
    }
  }
}