import { useEffect, useRef } from "react";
import "./Navbar.css";

const addStickyNavbar = (navbar, navbarOffsetRef) => () => {
    // PageYOffset is the distance from the top of the window
    if (window.pageYOffset >= navbarOffsetRef) {
        navbar.current.classList.add("sticky");
        return;
    }
    navbar.current.classList.contains("sticky") &&
        navbar.current.classList.remove("sticky");
};

export const Navbar = () => {
    const navbarRef = useRef();

    useEffect(() => {
        const navbarOffsetRef = navbarRef.current.offsetTop;
        window.addEventListener(
            "scroll",
            addStickyNavbar(navbarRef, navbarOffsetRef)
        );

        return () =>
            window.removeEventListener("scroll", addStickyNavbar(navbarRef));
    }, []);

    return (
        <nav className="navbar center" ref={navbarRef}>
            <a href="#section-1" className="navbar-link">
                Home
            </a>
            <a href="#section-2" className="navbar-link">
                About
            </a>
            <a href="#section-3" className="navbar-link">
                Portfolio
            </a>
            <a href="#section-4" className="navbar-link">
                Contact
            </a>
        </nav>
    );
};
