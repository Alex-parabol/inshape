import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

export const Navbar = () => {
  return (
    <Stack backgroundColor="#ffe03321">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" align-items="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};
