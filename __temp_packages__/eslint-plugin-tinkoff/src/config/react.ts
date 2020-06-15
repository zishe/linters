export const reactConfig = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/hooks',
    'prettier/react',
  ],

  settings: {
    react: {
      version: 'detect',
    },

    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
  },

  plugins: ['react', 'react-hooks'],

  rules: {
    'react/no-unsafe': ['warn', { checkAliases: true }], // show warnings for deprecated methods
    'react/no-unused-prop-types': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'warn',
    'react/jsx-key': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/default-props-match-prop-types': 'warn',
    'react/require-default-props': 'warn',
    'react/static-property-placement': ['error', 'static public field'],

    'react/sort-comp': [
      'off',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
            'componentDidCatch',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'class-methods-use-this': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'no-underscore-dangle': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};