import {Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import FileA from "./components/FileA";
import FileB from "./components/FileB";
import MyName from "./components/Myname";
import MySuperSecretProject from "./components/MySuperSecretProject";
import MySuperSecretFile from "./components/MySuperSecretFile";
import Projects from "./components/Projects";
import Page from "./components/Page";
function App() {

  return (
      <div>
            <Page/>
            <Routes>
              <Route  path='/' exact element={<Home/>}/>
              <Route  path='/myname' exact element={<MyName/>}/>
              <Route  path='/myname/filea.txt' exact element={<FileA/>}/>
              <Route  path='/myname/fileb.txt' exact element={<FileB/>}/>
              <Route  path='/myname/projects' exact element={<Projects/>}/>
              <Route  path='/myname/projects/mysupersecretproject' exact element={<MySuperSecretProject/>}/>
              <Route  path='/myname/projects/mysupersecretproject/mysupersecretfile.txt' exact element={<MySuperSecretFile/>}/>
            </Routes>

      </div>
  );
}

export default App;

