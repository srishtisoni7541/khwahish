import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Component-Diamond/Product.jsx'
import Jhumka from './Component-Diamond/Pages/Jhumka.jsx'
import PrincessPossessionDiamondEarrings from './Component-Diamond/Pages/PrincessPossessionDiamondEarrings';
import HeroMain from './Hero Component/HeroMain';
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import OurStory from './OurStory.jsx'
import NoorPage from './components conoor/NoorPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HeroMain />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'jhumka',
        element: <Jhumka />,
      },
      {
        path: 'princess-possession-diamond-earrings',
        element: <PrincessPossessionDiamondEarrings />,
      },{
        path:'story',
        element:<OurStory/>
      },
      {
        path:'noor',
        element:<NoorPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
