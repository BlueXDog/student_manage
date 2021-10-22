import logo from "../source/image/vovinam.jpg"
import userImage from "../source/image/sharigan.gif"
import "../source/css/adminlte.min.css"

function SideBar() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="index.html" className="brand-link">
                    <img src={logo} alt="Vovinam Logo" className="brand-image img-circle elevation-3" style={{backgroundColor: 'rgba(0,0,0,0.8)'}} />
                    <span className="brand-text font-weight-light">Vovinam Khai Tâm</span>
                </a>

                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                {/* <!-- Sidebar user panel (optional) --> */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={userImage} className="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Nguyễn Danh Vịnh</a>
                    </div>
                </div>

                {/* <!-- SidebarSearch Form --> */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                            <i className="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                    </div>
                </div>

                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* <!-- Add icons to the links using the .nav-icon className */}
                        {/* with font-awesome or any other icon font library --> */}
                    <li className="nav-item menu-open">
                        <a href="#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Biểu Đồ
                            <i className="right fas fa-angle-left"></i>
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/dash1" className="nav-link active">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Biểu Đồ Tập Luyện</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/dash2" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Biểu Đồ Ngân Sách </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="./personalchar.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Biểu Đồ Cá Nhân Hóa</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-edit"></i>
                        <p>
                            Biểu Mẫu
                            <i className="fas fa-angle-left right"></i>
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/forms/general.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Thêm mới học viên</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </nav>
                {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
        </div>       
    )
}

export default SideBar;