import {
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'
 import {QueryClientProvider} from 'react-query';
 import {ReactQueryDevtools} from 'react-query/devtools';
 import {queryClient} from './plugins/react-query';
 import { Toaster } from 'react-hot-toast';

 import ErrorPage from './error-page'
 import RootLayout from './pages/root'
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPassword from './pages/auth/forgot';
import RequestsPage from './pages/requests';
import HomePage from './pages/home';

function App() {

  const DashBoardRoutes = [
    {
      path: 'requests',
      element: <RequestsPage/>
    }
  ]

  const AuthRoutes = [
    {
      path: 'login',
      element: <Login/>,
    },
    {
      path: 'register',
      element: <Register/>
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword/>
    }
  ]

  const UnothorizedViewPages = [
    {
      path: '',
      element: <HomePage/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'contact',
      element: <div>Contact</div>
    },
    {
      path: 'services',
      element: <div>services</div>
    },
    {
      path: 'auth',
      children: AuthRoutes,
      // accessed via {hostname}/auth/{routename}
    },
]

  const router = createBrowserRouter([
    {
      children: [
        {
          path: '',
          element: <RootLayout/>,
          errorElement: <ErrorPage/>,
          children: UnothorizedViewPages,
          // accessed via {hostname}/{routename}
        },
        {
          path: 'dashboard',
          children: DashBoardRoutes
          // accessed via {hostname}/dashboard/{routename}
        }
      ]
    }
  ]);

  return (
    <>
    <Toaster/>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/> 
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    </>
  )
}

export default App