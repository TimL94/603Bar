import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './components/Footer.jsx';
import './app.css';

function App() {

  return (
    <Box sx={{p:0, m:0, display:'flex', flexDirection:'column', height:'80vh'}} boxSizing='border-box'>
      <Navbar />
      <div>
        <Outlet sx={{ mb:20 }}/>
      </div>
      <Footer/>
    </Box>
  )
}

export default App
