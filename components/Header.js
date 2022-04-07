import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/img/logo.svg";
import { NavBar } from "../Data/NavBar";

const Header = () => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header>
        <div className="header-wrapper">
          <Link href={"/"}>
            <Image
              src={logo}
              className="logo"
              width="80"
              onClick={() => {
                scrollToTop();
              }}
              alt="logo"
            />
          </Link>
          <nav>
            {NavBar.map((navlink) => {
              return (
                <Link href={navlink.href}>
                  <a
                    className={router.pathname == navlink.href ? "active" : ""}
                  >
                    {navlink.title}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
