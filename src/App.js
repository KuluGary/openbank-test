import React, { Component } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import palette from './styles/base.scss'
import Wizard from './views/Wizard'

import './App.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.primary
    },
    secondary: {
      main: palette.secondary
    }
  }
})

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Wizard />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
