import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './root/App.jsx'
import ArticlePage from './routes/ArticlePage.jsx'
import ArticlePage2 from './routes/ArticlePage2.jsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ArticlePage /> },
      { path: '/article', element: <ArticlePage /> },
      { path: '/article2', element: <ArticlePage2 /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


