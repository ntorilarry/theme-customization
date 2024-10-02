import ThemeDrawer from "./components/ThemeDrawer";
import Startup from "./utils/Startup";
import { useTheme } from "./utils/ThemeContext";

const App = () => {
    const { theme } = useTheme();
  return (
    <div className="App">
      <ThemeDrawer/>
      <Startup />
    </div>
  );
};

export default App;
