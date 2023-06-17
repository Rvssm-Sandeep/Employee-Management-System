import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { loginContext } from "../../context/loginContext";
import "./NavbarMain.css";

function NavbarMain() {
  const [currentUser, error, userLoginStatus, loginUser, logoutUser, role] =
    useContext(loginContext);

  const navigate = useNavigate();

  const handleAddEmployeeClick = () => {
    navigate("/add-employee");
  };

  return (
    <Navbar expand="lg" className="navbar-main">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://img.freepik.com/free-vector/organization-abstract-concept_335657-3015.jpg?w=740&t=st=1686116754~exp=1686117354~hmac=c01455530e2b23d496d4c11660ff2d9a20447f8eddde18ff0fd50e74cbac96fb"
            width="55px"
            height="55px"
            alt="Company Logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ul className="navbar-nav list-unstyled">
           
                {!userLoginStatus &&
                  <ul className="navbar-nav list-unstyled">
                    <li className="nav-item">
                  <Link className=" a mx-2 p-2   fs-5" to="/">
                    Home
                  </Link>
                </li>
                     <li className="nav-item">
                 <Link className="a mx-2 p-2     fs-5" to="/login">
                   Login
                 </Link>
               </li>

                  </ul>
                
          }

{userLoginStatus && role == "admin" ? (
                <ul className="navbar-nav list-unstyled">
                  <li className="nav-item">
                        <Link className="a mx-2 p-2     fs-5" to="/users">
                          Employees
                        </Link>
                      </li>
                      <li className="nav-item ">
                    <Link
                      className="a mx-2 p-2     fs-5 "
                      to="/add-user"
                    >
                      Add Employee
                    </Link>
                  </li>
                    </ul>
               
              ) : (
                userLoginStatus && (
                  <ul className="navbar-nav list-unstyled">
                    <li className="nav-item">
                  <Link className="a mx-2 p-2    fs-5" to="/emp-dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item ">
                      <Link
                        className="a mx-2 p-2    fs-5"
                        
                        to="/add-task"
                      >
                        Add Task
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="a mx-2 p-2 fs-5"
                        to="/emp-profile"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul> )
                  )}
                {userLoginStatus&&
                <li className="nav-item">
                <Link className="a mx-2 p-2     fs-5" to="/login" onClick={logoutUser}>
                  Logout
                </Link>
              </li>
              }
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarMain;