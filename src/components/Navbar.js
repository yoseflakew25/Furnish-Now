import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavContainer scroll={scroll} className={scroll ? "glassmorphism" : ""}>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink exact to="/" activeClassName="active">
            <h4>Furnish Now</h4>
          </NavLink>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink to={url} activeClassName="active">
                  {text}
                </NavLink>
              </li>
            );
          })}
          {myUser && (
            <li>
              <NavLink to="/checkout" activeClassName="active">
                checkout
              </NavLink>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: ${(props) =>
    props.scroll ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};

  &.glassmorphism {
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      color: var(--clr-primary-3);
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
      .active {
        border-bottom: 2px solid var(--clr-primary-7);
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
