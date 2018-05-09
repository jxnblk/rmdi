
# React Material Design Icons

Built with [Pixo][pixo], [Styled Components][sc], and [Styled System][sys]

https://jxnblk.com/rmdi

[pixo]: https://github.com/c8r/pixo
[sys]: https://github.com/jxnblk/styled-system
[sc]: https://github.com/styled-components/styled-components

```sh
npm i rmdi
```

```jsx
// import icons individually for better tree-shaking
import Accessibility from 'rmdi/lib/Accessibility'

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

## Props

Prop | Type | Description
---|---|---
`size` | number | width and height in pixels
`color` | string | fill color, uses Styled System's [`color`][color] function

### Spacing Props

Margin can be applied with the following props, which use Styled System's [`space`][space] function.
Margin props accept numbers for pixel values, strings with CSS units, or arrays for [responsive][responsive] margin

Prop | Description
---|---
`m` | margin
`mt` | margin-top
`mr` | margin-right
`mb` | margin-bottom
`ml` | margin-left
`mx` | margin-left and margin-right
`my` | margin-top and margin-bottom

[color]: https://github.com/jxnblk/styled-system#color-responsive
[space]: https://github.com/jxnblk/styled-system#space-responsive
[responsive]: https://github.com/jxnblk/styled-system#responsive-styles

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

## Related

- [Google Material Design Icons](https://github.com/google/material-design-icons)
- [Pixo][pixo]
- [Styled Components][sc]
- [Styled System][sys]
- [React Icons](https://github.com/gorangajic/react-icons)

[MIT License](LICENSE.md)
