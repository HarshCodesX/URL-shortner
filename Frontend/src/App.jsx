import { Outlet } from '@tanstack/react-router';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App