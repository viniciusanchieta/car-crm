import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { 
  Button,
  TextField
} from '@material-ui/core';

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
    <h1>Aplicação React teste</h1>
    <TextField id="outlined-basic"/>
    <Button color="primary" variant="contained">Default</Button>
  </ThemeProvider>
);

export default App;