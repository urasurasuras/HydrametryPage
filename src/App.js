import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "./Pages/Layout/Layout";
import {SpatooJr} from "./Pages/SpatooJr/SpatooJr";
import {AboutUs} from "./Pages/AboutUs/AboutUs";
import {Endpoints} from "./Endpoints";
import {NotFound} from "./Pages/404/404";
import {Home} from "./Pages/Home/Home";
import {ZenciUras} from "./Pages/ZenciUras/ZenciUras";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route exact path={Endpoints.Spatoo} element={<SpatooJr/>}/>
                  <Route exact path={Endpoints.AboutUs} element={<AboutUs/>}/>
                  <Route exact path="zenciuras" element={<ZenciUras/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
