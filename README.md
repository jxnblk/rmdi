
# React Material Design Icons

Built with [Pixo][pixo], [Styled Components][sc], and [Styled System][sys]

[pixo]: https://github.com/c8r/pixo
[sys]: https://github.com/jxnblk/styled-system
[sc]: https://github.com/styled-components/styled-components

```sh
npm i rmdi
```

```jsx
// import icons individually for better tree-shaking
import { Accessibility } from 'rmdi'

const App = props => (
  <Accessibility
    size={32}
    color='tomato'
  />
)
```

```jsx
// import all icons as a single component
import { Icon } from 'rmdi'

const App = props => (
  <Icon
    name='accessibility'
    size={32}
    color='tomato'
  />
)
```

## List of Icons

See the [icon list](ICONS.md) for a complete list of all icons available

## Contributing

```sh
npm install
```

The build process will:

1. Parse the `material-design-icons` package for SVG source code
2. Copy the icons to the `svg/` folder
3. Create an `examples/` folder for tests and development
4. Run [Pixo][pixo] on the `svg/` folder and output to `src/`
5. Run Babel on the `src/` folder and output to `lib/`

Tests:

```sh
npm test
```

To run the development server:

```sh
npm start
```

## Todo

- [x] create list of icon names markdown
- [x] update pixo to support circles
- [ ] custom template
- [ ] basic site

[MIT License](LICENSE.md)
