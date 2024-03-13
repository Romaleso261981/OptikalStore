import * as Route from "@/constants/routes";
import logo from "@/images/ladclimatservice/лого-89.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import * as ROUTE from "@/constants/routes";

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <div className="footer-contacts">
          <h1>Контакти</h1>
          <ul className="footer-contacts-list">
            <li className="footer-contacts-item">м. Ладижин, Вінницька обл.</li>
            <li className="footer-contacts-item">+38 068 947 87 23</li>
            <li className="footer-contacts-item">+38 096 422 02 74</li>
          </ul>
        </div>
      </div>
      <div className="footer-col-2">
        <ul className="navigation-menu-footer">
          <li>
            <NavLink
              activeClassName="navigation-menu-active"
              exact
              to={ROUTE.HOME}
            >
              <strong>Головна</strong>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="navigation-menu-active" to={ROUTE.SHOP}>
              <strong>Mагазин</strong>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="navigation-menu-active"
              to={ROUTE.OUR_WORKS}
            >
              <strong>Наші роботи</strong>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="navigation-menu-active"
              to={ROUTE.RECOMMENDED_PRODUCTS}
            >
              <strong>Рекомендовані</strong>
            </NavLink>
          </li>
        </ul>
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            &nbsp;
            <a href="/">Замовити</a>
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
