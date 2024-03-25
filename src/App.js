// import color mode context
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import UserDashboard from "./pages/userDashboard/userDashboard";
import Topbar from "./components/topbar";

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <Topbar/>
      <UserDashboard/>
    </ThemeProvider>
  );
}

export default App;
