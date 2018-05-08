import React from 'react'
import CSS from 'ok-css'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import * as icons from '../src'

const Root = styled(Box)([], {
  fontFamily: 'system-ui, sans-serif',
  lineHeight: 1.5
})

const Title = styled('h1')([], space, fontSize)

Title.defaultProps = {
  m: 0,
  fontSize: [ 5, null, 6 ]
}

const Heading = styled('h2')([], space, fontSize)

Heading.defaultProps = {
  m: 0,
  fontSize: 4
}

const Pre = styled('pre')([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '16px',
})

const Link = styled('a')([], {
  color: 'inherit',
  fontWeight: 'bold',
  '&:hover': {
    color: '#0cf'
  }
})

const Truncate = styled(Box)([], {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

const iconList = Object.keys(icons)
  .filter(key => key !== 'Icon')
  .map(key => (
    <Box
      width={96}
      key={key}
      title={key}
      m={3}
      style={{
        textAlign: 'center'
      }}>
      {React.createElement(icons[key], {
        title: key,
        size: 64,
      })}
      <Truncate fontSize={10}>
        {key}
      </Truncate>
    </Box>
  ))

const App = props => (
  <React.Fragment>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>React Material Design Icons</title>
      <CSS />
    </head>
    <Root
      px={[ 3, 4 ]}
      py={[ 4, 5 ]}
      color='white'
      bg='black'>
      <Title>React Material Design Icons</Title>
      <Box fontSize={3} my={3}>
        Built with <Link href='https://github.com/c8r/pixo'>Pixo</Link>,
        {' '}
        <Link href='https://github.com/styled-components/styled-components'>Styled Components</Link>,
        {' '}
        and <Link href='https://github.com/jxnblk/styled-system'>Styled System</Link>.
      </Box>
      <Pre>
        npm i rmdi
      </Pre>
      <Link href='https://github.com/jxnblk/rmdi'>
        GitHub
      </Link>
      <Heading mt={4}>{iconList.length} Icons</Heading>
      <Flex
        mx={-3}
        flexWrap='wrap'>
        {iconList}
      </Flex>
    </Root>
  </React.Fragment>
)

export default App
