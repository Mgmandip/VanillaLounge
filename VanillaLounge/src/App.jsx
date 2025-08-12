import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from "./VR/Navbar";
import Filehub from "./VR/Filehub";
import Newsfeed from "./VR/Newsfeed";
import Footer from "./VR/Footer";
import Accountsetting from "./VR/Accountsetting";
import PersonalDetails from "./VR/StaffProfile/PersonalDetails";
import Employment from "./VR/StaffProfile/Employment";
import Bank from "./VR/StaffProfile/Bank";
import Documents from "./VR/StaffProfile/Documents";
import Newsfeedtwo from './VR/Newsfeedtwo';
import SystemDetails from './VR/StaffProfile/SystemDetails';
import Shifts from './VR/StaffProfile/Shifts';
import Leaves from './VR/StaffProfile/Leaves';
import Unavilability from './VR/StaffProfile/Unavilability';
import ActivityLog from './VR/StaffProfile/ActivityLog';
import HourProfile from './VR/StaffProfile/HourProfile';
import SettingSidebar from './VR/Setting/SettingSidebar';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/filehub" element={<Filehub />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/account-setting" element={<Accountsetting />} />
        <Route path="/profile" element={<SystemDetails />} />
        <Route path="/personaldetails" element={<PersonalDetails />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/newsfeedtwo" element={<Newsfeedtwo/>} />

        <Route path='/Shifts' element={<Shifts/>}/>
        <Route path='/Leaves' element={<Leaves/>}/>
        <Route path='/Unavilability' element={<Unavilability/>}/>
        <Route path='/ActivityLog' element={<ActivityLog/>}/>
        <Route path='/HourProfile' element={<HourProfile/>}/>

        
        <Route path='/SettingSidebar' element={<SettingSidebar/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
