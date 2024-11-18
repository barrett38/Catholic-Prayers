import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  const location = useLocation();
  const isDailyRosaryPage = location.pathname === "/daily-rosary";
  const isIndividualPrayersPage = location.pathname === "/individual-prayers";

  return (
    <div>
      <p className="custom-margin-top-of-footer">
        <Link
          to={isDailyRosaryPage ? "/" : "/daily-rosary"}
          className="footer-link"
        >
          {isDailyRosaryPage ? "Servite Rosary" : "Today's Daily Rosary"}
        </Link>
      </p>
      <p className="custom-margin-bottom-of-footer">
        <Link
          to={isIndividualPrayersPage ? "/" : "/individual-prayers"}
          className="footer-link"
        >
          {isIndividualPrayersPage ? "Servite Rosary" : "Individual Prayers"}
        </Link>
      </p>
    </div>
  );
};

export default Footer;
