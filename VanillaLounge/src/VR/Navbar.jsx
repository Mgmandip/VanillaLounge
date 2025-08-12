import { useNavigate } from 'react-router-dom';
import { HiOutlineBell, HiOutlineUser} from 'react-icons/hi';

const Navbar = () => (
  <nav className="flex justify-between items-center px-5 py-4 ">
   
    <div className="font-bold text-xl text-shadow-blue-950">
      Vanilla <span className="text-[#72AF32]">Lounge</span>
    </div>

    <div className="px-56 space-x-14 text-base font-medium">
      <a href="/profile">Shifts</a>
      <a href="#">Leaves</a>
      <a href="/profile">Employees</a>
      <a href="/newsfeed">News Feed</a>
      <a href="/filehub">File Hub</a>
      <a href="newsfeed">Unavailability</a>
    </div>

    <div className="flex items-center space-x-4">
      <button className="relative">
        <HiOutlineBell className="text-xl" />
      </button>
      <button className="relative">
        <HiOutlineUser className="text-2xl rounded-2xl" href='/SettingSidebar'/>
      </button>
    </div>
  </nav>
);

export default Navbar;
