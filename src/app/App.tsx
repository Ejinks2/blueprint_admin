import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BlogPage from '../pages/BlogPage'

function App (): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default App
