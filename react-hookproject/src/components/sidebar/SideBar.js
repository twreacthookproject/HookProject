import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { getCategoriesApi } from "../../redux/actions/categoryActions";

import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

function SideBar({ isOpen, toggle, categoriesProp, ...props }) {
  const [categories, setCategories] = useState({ ...categoriesProp });

  useEffect(() => {
    props.dispatch(getCategoriesApi());
    console.log("girdi");
    console.log(props.categories);
    // if (categories.length === 0) {
    //   props.dispatch(getCategoriesApi());
    // }
    // setCategories({ ...props.categories });
  }, [props.categories]);

  console.log(categoriesProp);

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <h3>NOTES</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p>Menu</p>
          <NavItem>
            <NavLink tag={Link} to={"/home"}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/about"}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              About
            </NavLink>
          </NavItem>
          <SubMenu
            title="Categories"
            icon={faCopy}
            items={Object.values(categoriesProp)}
          />
          <NavItem>
            <NavLink tag={Link} to={"/pages"}>
              <FontAwesomeIcon icon={faCopy} className="mr-2" />
              New Note
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/contact"}>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categoriesProp: state.categoryListReducer,
  };
}

export default connect(mapStateToProps)(SideBar);
