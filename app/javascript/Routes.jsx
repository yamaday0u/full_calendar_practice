import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Foo } from './pages/Foo'
import { Calendar } from './pages/Calendar'

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/spa/foo">
          <Foo />
        </Route>
        <Route path="/spa/calendar">
          <Calendar />
        </Route>
      </Switch >
    )
  }
}

export default Routes
