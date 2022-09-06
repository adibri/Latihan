import { Box, Stack } from '@mui/material';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App(props) {
  console.log(props);
  return (
    <Box minWidth="100vh" minHeight="100vh">
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Rightbar />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Content />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Footer />
      </Stack>
    </Box>
  );
}

export default App;
