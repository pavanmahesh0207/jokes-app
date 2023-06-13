import { createBrowserRouter } from 'react-router-dom'

import Login from './Login'
import Homepage from './HomePage'

export const LOGIN = '/'
export const HOMEPAGE = '/homepage'

export const router = createBrowserRouter([
  { path: LOGIN, element: <Login /> },
  { path: HOMEPAGE, element: <Homepage /> },
])
