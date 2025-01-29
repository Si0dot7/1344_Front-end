import { FaHome,FaUser  } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
const MenuData = [
    {
        title:'หน้าแรก',
        path:'/',
        icon:<FaHome/>
    },
    {
        title:'สมาชิก',
        path:'/member',
        icon:<FaUser/>
    },
    {
        title:'Dashboard',
        path:'/dashboard',
        icon:<BiSolidDashboard/>
    }
]

export default MenuData