import * as React from 'react'
import { Router } from '@reach/router'

import { Profile } from '../modules/Profile'
import { LocationProvider } from '@reach/router'
import { history } from '../modules/routerHistory'

// const IndexPage = () => (
//   <IndexLayout>
//     <Page>
//       <Container>
//         <h1>Hi people</h1>
//         <p>Welcome to your new Gatsby site.</p>
//         <p>Now go build something great.</p>
//         <Link to="/page-2/">Go to page 2</Link>
//       </Container>
//     </Page>
//   </IndexLayout>
// )

const App = () => {
  return (
    <LocationProvider history={history}>
        <Router basepath="/app">
          <Profile path="/app/profile/:?results" />
        </Router>
    </LocationProvider>
  )
}

export default App
