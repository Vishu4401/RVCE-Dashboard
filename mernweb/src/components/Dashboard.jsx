import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class='container-fluid mb-5'>
                <div class='row'>
                    <nav 
                        id='sidebarMenu'
                        class = "col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"                    
                    >
                        <div class = "position-sticky pt-3">
                            <ul class = "nav flex-column">
                                <li class = "nav-item">
                                    <NavLink class = "nav-link active" aria-current= "page" to="#">
                                        <svg
                                            xmlns = 'http://www.w3.org/2000/svg'
                                            width = "24"
                                            height = "24"
                                            viewBox = '0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap="round"
                                            stroke-linejoin='round'
                                            className = 'feather feather-home'
                                            aria-hidden="true"
                                        >
                                            <path d = "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points='14 2 14 8 20 8'></polyline>
                                            <line x1="16" y1 = "13" x2 = "8" y2 = "13"></line>
                                            <line x1="16" y1 = "17" x2 = "8" y2 = "17"></line>
                                            <polyline points='10 9 9 9 8 9'></polyline>
                                        </svg>
                                        Dashboard
                                    </NavLink>
                                </li>
                                
                                {/* <li class="nav-item">
                                    <NavLink className="nav-link" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height = "24"
                                            viewBox = "0 0 24 24"
                                            fill = "none"
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap = "round"
                                            stroke-linejoin = "round"
                                            className='feather feather-shopping-cart'
                                            aria-hidden = "true"    
                                        >
                                            <circle cx="9" cy = "21" r = "1"></circle>
                                            <circle cx="20" cy = "21" r = "1"></circle>
                                            <path d = "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.69h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Orders
                                    </NavLink>

                                </li>

                                <li class="nav-item">
                                    <NavLink className="nav-link" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height = "24"
                                            viewBox = "0 0 24 24"
                                            fill = "none"
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap = "round"
                                            stroke-linejoin = "round"
                                            className='feather feather-shopping-cart'
                                            aria-hidden = "true"    
                                        >
                                            <circle cx="9" cy = "21" r = "1"></circle>
                                            <circle cx="20" cy = "21" r = "1"></circle>
                                            <path d = "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.69h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Products
                                    </NavLink>

                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height = "24"
                                            viewBox = "0 0 24 24"
                                            fill = "none"
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap = "round"
                                            stroke-linejoin = "round"
                                            className='feather feather-shopping-cart'
                                            aria-hidden = "true"    
                                        >
                                            <circle cx="9" cy = "21" r = "1"></circle>
                                            <circle cx="20" cy = "21" r = "1"></circle>
                                            <path d = "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.69h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Customers
                                    </NavLink>

                                </li>

                                <li class="nav-item">
                                    <NavLink className="nav-link" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height = "24"
                                            viewBox = "0 0 24 24"
                                            fill = "none"
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap = "round"
                                            stroke-linejoin = "round"
                                            className='feather feather-shopping-cart'
                                            aria-hidden = "true"    
                                        >
                                            <circle cx="9" cy = "21" r = "1"></circle>
                                            <circle cx="20" cy = "21" r = "1"></circle>
                                            <path d = "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.69h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Reports
                                    </NavLink>

                                </li>

                                <li class="nav-item">
                                    <NavLink className="nav-link" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height = "24"
                                            viewBox = "0 0 24 24"
                                            fill = "none"
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap = "round"
                                            stroke-linejoin = "round"
                                            className='feather feather-shopping-cart'
                                            aria-hidden = "true"    
                                        >
                                            <circle cx="9" cy = "21" r = "1"></circle>
                                            <circle cx="20" cy = "21" r = "1"></circle>
                                            <path d = "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.69h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Integrations
                                    </NavLink>

                                </li>

                                <li class="nav-item">
                                    <NavLink className="nav-link" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height = "24"
                                            viewBox = "0 0 24 24"
                                            fill = "none"
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap = "round"
                                            stroke-linejoin = "round"
                                            className='feather feather-shopping-cart'
                                            aria-hidden = "true"    
                                        >
                                            <circle cx="9" cy = "21" r = "1"></circle>
                                            <circle cx="20" cy = "21" r = "1"></circle>
                                            <path d = "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.69h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Year-end sale
                                    </NavLink>

                                </li>  */}
                            </ul>
                        </div>
                    </nav>

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="chartjs-size-monitor">
                            <div class = "chartjs-size-monitor-expand">
                                <div class=""></div>
                            </div>

                            <div class="chartjs-size-monitor-shrink">
                                <div class = ""></div>
                            </div>
                        </div>

                        {/* <div class = "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> */}
                            {/* <h1 class = "h2">Dashboard</h1>
                            <li class="nav-item">
                                    <NavLink className="nav-link" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height = "24"
                                            viewBox = "0 0 24 24"
                                            fill = "none"
                                            stroke='currentColor'
                                            stroke-width = "2"
                                            stroke-linecap = "round"
                                            stroke-linejoin = "round"
                                            className='feather feather-file-text'
                                            aria-hidden = "true">
                                                
                                            <path d = "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points='14 2 14 8 20 8'></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points='10 9 9 9 8 9'></polyline>
                                        </svg>
                                    Current Month
                                </NavLink>
                            </li> */}
                            <h2>Section Title</h2>
                            <div class = "table-responsive">
                                <table class = "table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th scope='col'>#</th>
                                            <th scope='col'>Header</th>
                                            <th scope='col'>Header</th>
                                            <th scope='col'>Header</th>
                                            <th scope='col'>Header</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1001</td>
                                            <td>random</td>
                                            <td>data</td>
                                            <td>placeholder</td>
                                            <td>text</td>
                                        </tr>
                                        <tr>
                                            <td>1002</td>
                                            <td>placeholder</td>
                                            <td>irrelevant</td>
                                            <td>visual</td>
                                            <td>layout</td>
                                        </tr>
                                        <tr>
                                            <td>1003</td>
                                            <td>data</td>
                                            <td>rich</td>
                                            <td>dashboard</td>
                                            <td>tabular</td>
                                        </tr>
                                        <tr>
                                            <td>1004</td>
                                            <td>text</td>
                                            <td>random</td>
                                            <td>layout</td>
                                            <td>dashboard</td>
                                        </tr>

                                        <tr>
                                            <td>1006</td>
                                            <td>dashboard</td>
                                            <td>illustrative</td>
                                            <td>rich</td>
                                            <td>data</td>
                                        </tr>
                                        <tr>
                                            <td>1007</td>
                                            <td>text</td>
                                            <td>plcaeholder</td>
                                            <td>layout</td>
                                            <td>dashboard</td>
                                        </tr>
                                        <tr>
                                            <td>1008</td>
                                            <td>dashboard</td>
                                            <td>illustrative</td>
                                            <td>rich</td>
                                            <td>data</td>
                                        </tr>
                                        <tr>
                                            <td>1009</td>
                                            <td>random</td>
                                            <td>tabular</td>
                                            <td>information</td>
                                            <td>text</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        {/* </div> */}
                    </main>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;