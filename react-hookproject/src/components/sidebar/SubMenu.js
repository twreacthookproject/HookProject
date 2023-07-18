import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getNotes } from "../../redux/actions/noteActions";
const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;
  const selectCategory = (category) =>{
    getNotes(category.Id)
console.log(category);
  }
  return (
    <div>
      <NavItem
        onClick={toggle}
        className={classNames({ "menu-open": !collapsed })}
      >
        <NavLink className="dropdown-toggle">
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {title}
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        {items.map((item) => (
          <NavItem
            key={item.id}
            className="pl-4"
            //active={item.id === this.props.currentCategory.id}
            onClick={()=>selectCategory(item)}
          >
            <NavLink tag={Link} to={"/noteList/"+item.id}>
              {item.name}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
