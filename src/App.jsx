import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './appRoute/AppRoutes';


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
