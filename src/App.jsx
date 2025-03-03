import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './pages/projects/projects.css';
import { ProjectProvider } from './context/useContext';
import  RoutesComponent  from './Routes.jsx';

function App() {

  return (
    <ProjectProvider>
      <RoutesComponent />
    </ProjectProvider>
  )
}

export default App
