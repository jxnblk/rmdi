
# React Material Design Icons

Built with [Pixo][pixo], [styled-components][sc], and [Styled System][sys]

[pixo]: https://github.com/c8r/pixo
[sys]: https://github.com/jxnblk/styled-system
[sc]: https://github.com/styled-components/styled-components

```sh
npm i rmdi
```

```jsx
// import icons individually for better tree-shaking
import {
  Accessibility,
} from 'rmdi'
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

## Todo

- [x] create list of icon names markdown
- [ ] update pixo to support circles
- [ ] custom template
- [ ] basic site

MIT License
