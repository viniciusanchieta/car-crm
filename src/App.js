import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.css';
// import react-icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const themes = createTheme({
  palette: {
    primary: {
      main: '#3f2',
    },
  },
  props:{
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true,
    }
  }
});


const App = () => (
  <ThemeProvider theme={themes}>
    <h1 className="text-danger">Aplicação React teste</h1>
    <FaGithub/>
  </ThemeProvider>
);

export default App;