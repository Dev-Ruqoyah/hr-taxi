import React from "react";
import { Navbar,Button, NavbarCollapse } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <Navbar className="border-b-2 border-gray">
                <Link to="/" className="self-center whitespace-nowrap text-black text-xl sm:text-md ">
                    <span className="px-4 py-1 rounded-lg text-white bg-gradient-to-r from-cyan-800 to-blue-600">Awffy</span>
                    Taxi
                </Link>
                <div className="flex justify-center md:order-2  gap-2">
                    <Link to="/sign-in">
                        <Button gradientDuoTone ="purpleToBlue" outline>Sign In</Button>
                    </Link>

                   

                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active>
                        <Link to="/Home"  className="hover:text-blue">Home</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/About" className="hover:text-blue">About</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/Services" className="hover:text-blue">Services</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/Home" className="hover:text-blue">Services</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
          

                
            </Navbar>
        </div>
     );
}
 
export default Header;
