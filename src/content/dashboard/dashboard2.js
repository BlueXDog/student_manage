import FooterDashboard from "../layout/footer"
import HeaderDashboard from "../layout/header"
import NavBar from "../layout/navbar"
import SideBar from "../layout/sidebar"

function BieuDoKinhPhi() {
 return(
    <div>

    </div>    
 )   
}

function Dashboard2() {
    return(
        <div>
            <HeaderDashboard/>
            <div className="hold-transition sidebar-mini">
                <div className="wrapper">
                    <NavBar/>
                    <SideBar/>
                    <BieuDoKinhPhi/>
                </div>
                <FooterDashboard/>
            </div>
        </div>        
    )
}

export default Dashboard2
