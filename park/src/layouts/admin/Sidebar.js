import React from "react";
import {Link} from 'react-router-dom'



const Sidebar = () => {

    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">

                <Link className="nav-link" to="/admin/dashboard">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Dashboard
                </Link>

                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Owner
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link> 
                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/add-owner">Add Owner</Link>
                        <Link className="nav-link" to="/admin/view-owner">View Owner</Link>
                    </nav>
                </div>


                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts1">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Guest
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link> 
                <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/add-guest">Add Guest</Link>
                        <Link className="nav-link" to="/admin/view-guest">View Guest</Link>
                    </nav>
                </div>


                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts2">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Slot
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link> 
                <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/add-slot">Add Slot</Link>
                        <Link className="nav-link" to="/admin/view-slot">View Slot</Link>
                    </nav>
                </div>

                
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts3" aria-expanded="false" aria-controls="collapseLayouts3">
                    <div className="sb-nav-link-icon"><i className="fas fa-car"></i></div>
                    Vehicle
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link> 
                <div className="collapse" id="collapseLayouts3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/add-vehicle">Add Vehicle</Link>
                        <Link className="nav-link" to="/admin/view-vehicle">View Vehicle</Link>
                    </nav>
                </div>


                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts4" aria-expanded="false" aria-controls="collapseLayouts4">
                    <div className="sb-nav-link-icon"><i className="fas fa-list-check"></i></div>
                    Slot Transaction
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link> 
                <div className="collapse" id="collapseLayouts4" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/add-slottrans">Add Slot Transaction</Link>
                        <Link className="nav-link" to="/admin/view-slottrans">View Slot Transaction</Link>
                    </nav>
                </div>


                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                    Pages
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                            Authentication
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/login">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                            </nav>
                        </div>
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                            Error
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/403">403 Page</Link>
                                <Link className="nav-link" to="/404">404 Page</Link>
                            </nav>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Admin
        </div>
    </nav>
    );
}

export default Sidebar;