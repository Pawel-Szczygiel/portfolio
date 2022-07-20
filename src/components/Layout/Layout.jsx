import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';


function Layout() {
    return ( 
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">
                    <span className="top-tags-html">&lt;html&gt;</span>
                    <br /><br /><br />
                    &lt;body&gt;
                </span>

                <Outlet />

                <span className="tags bottom-tags">&lt;/body&gt;
                    <br />
                    <span className="bottom-tags-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
     );
}

export default Layout;

