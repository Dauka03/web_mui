import Body from '../components/Body';
import SideBar from '../components/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CenterMode from '../components/Slider';
function HomePage() {
    return (
        <div style={{width:'100vw',display:'flex',  background: "linear-gradient(to bottom, #7C2B1E 0%, #7C2B1E 30%, black 50%, black 100%)"
    }}>
          <SideBar></SideBar>

        <Routes>
        <Route path="/" element={<Body />}>
        </Route>
        <Route path='/photo' element={<CenterMode />} />

      </Routes>
        </div>
    );
  }
  
  export default HomePage;