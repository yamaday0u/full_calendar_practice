import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Foo } from './pages/Foo'

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/spa/foo">
          <Foo />
        </Route>
      </Switch >
    )
  }
}

export default Routes
