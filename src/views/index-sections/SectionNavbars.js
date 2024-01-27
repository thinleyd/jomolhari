// /*!

// =========================================================
// * Paper Kit React - v1.3.2
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-kit-react

// * Copyright 2023 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";

// // reactstrap components
// import {
//   UncontrolledCollapse,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";

// function SectionNavbars() {
//   return (
//     <>
//       <div className="section section-navbars">
//         <Container id="menu-dropdown">
//           <div className="title">
//             <h3>Menukk</h3>
//           </div>
//           <br />
//           <Row>
//             <Col md="6">
//               <Navbar className="bg-primary" expand="lg">
//                 <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
//                   Menu
//                 </NavbarBrand>
//                 <button
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded={false}
//                   aria-label="Toggle navigation"
//                   className="navbar-toggler navbar-toggler-right"
//                   data-target="#navbar-menu"
//                   data-toggle="collapse"
//                   id="navbar-menu"
//                   type="button"
//                 >
//                   <span className="navbar-toggler-bar" />
//                   <span className="navbar-toggler-bar" />
//                   <span className="navbar-toggler-bar" />
//                 </button>
//                 <UncontrolledCollapse navbar toggler="#navbar-menu">
//                   <Nav className="mr-auto" navbar>
//                     <NavItem>
//                       <NavLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         Link
//                       </NavLink>
//                     </NavItem>
//                     <NavItem>
//                       <NavLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         Link
//                       </NavLink>
//                     </NavItem>
//                     <UncontrolledDropdown nav inNavbar>
//                       <DropdownToggle
//                         aria-expanded={false}
//                         aria-haspopup={true}
//                         caret
//                         color="default"
//                         data-toggle="dropdown"
//                         href="#pablo"
//                         id="dropdownMenuButton"
//                         nav
//                         onClick={(e) => e.preventDefault()}
//                         role="button"
//                       >
//                         Dropdown
//                       </DropdownToggle>
//                       <DropdownMenu
//                         aria-labelledby="dropdownMenuButton"
//                         className="dropdown-info"
//                       >
//                         <DropdownItem header tag="span">
//                           Dropdown header
//                         </DropdownItem>
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Action
//                         </DropdownItem>
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Another action
//                         </DropdownItem>
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Something else here
//                         </DropdownItem>
//                         <DropdownItem divider />
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Separated link
//                         </DropdownItem>
//                         <DropdownItem divider />
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Another separated link
//                         </DropdownItem>
//                       </DropdownMenu>
//                     </UncontrolledDropdown>
//                   </Nav>
//                 </UncontrolledCollapse>
//               </Navbar>
//             </Col>
//             <Col md="6">
//               <Navbar className="bg-danger" expand="lg">
//                 <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
//                   Icons
//                 </NavbarBrand>
//                 <button
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded={false}
//                   aria-label="Toggle navigation"
//                   className="navbar-toggler navbar-toggler-right"
//                   data-target="#navbar-menu-icon"
//                   data-toggle="collapse"
//                   id="navbar-menu-icon"
//                   type="button"
//                 >
//                   <span className="navbar-toggler-bar" />
//                   <span className="navbar-toggler-bar" />
//                   <span className="navbar-toggler-bar" />
//                 </button>
//                 <UncontrolledCollapse navbar toggler="#navbar-menu-icon">
//                   <Nav className="ml-auto" navbar>
//                     <NavItem className="active">
//                       <NavLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i aria-hidden={true} className="nc-icon nc-email-85" />
//                       </NavLink>
//                     </NavItem>
//                     <NavItem>
//                       <NavLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i
//                           aria-hidden={true}
//                           className="nc-icon nc-single-02"
//                         />
//                       </NavLink>
//                     </NavItem>
//                     <UncontrolledDropdown nav inNavbar>
//                       <DropdownToggle
//                         aria-expanded={false}
//                         aria-haspopup={true}
//                         caret
//                         color="default"
//                         data-toggle="dropdown"
//                         href="#pablo"
//                         nav
//                         onClick={(e) => e.preventDefault()}
//                         role="button"
//                       >
//                         <i
//                           aria-hidden={true}
//                           className="nc-icon nc-settings-gear-65"
//                         />
//                       </DropdownToggle>
//                       <DropdownMenu className="dropdown-danger" right>
//                         <DropdownItem header tag="span">
//                           Dropdown header
//                         </DropdownItem>
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Another action
//                         </DropdownItem>
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Something else here
//                         </DropdownItem>
//                         <DropdownItem divider />
//                         <DropdownItem
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Separated link
//                         </DropdownItem>
//                       </DropdownMenu>
//                     </UncontrolledDropdown>
//                   </Nav>
//                 </UncontrolledCollapse>
//               </Navbar>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default SectionNavbars;


import React, { useContext } from "react";
import "./Services.css";
import Card from "views/Card/Card";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color:  "black"}}>Activities</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        {/* <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            imageSrc={require("assets/img/daniel-olahh.jpg")}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div> */}
        {/* First card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
        >
          <Card
            imageSrc={require("assets/img/4.jpg")}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 2nd Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "20rem",top: "7rem" }}
          transition={transition}
        >
          <Card
            imageSrc={require("assets/img/6.jpg")}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          
        </motion.div>
         {/* 3rd Card */}
         <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "39rem",top: "0rem"}}
          transition={transition}
        >
          <Card
            imageSrc={require("assets/img/7.jpg")}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          
        </motion.div>
        
        {/* 4rd card*/}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "58rem",top: "7rem"}}
          transition={transition}
        >
          <Card
            imageSrc={require("assets/img/11.jpg")}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          
        </motion.div>
          {/* 5th Card */}
          <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "77rem",top: "0rem"}}
          transition={transition}
        >
          <Card
            imageSrc={require("assets/img/12.jpg")}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          
        </motion.div>
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
