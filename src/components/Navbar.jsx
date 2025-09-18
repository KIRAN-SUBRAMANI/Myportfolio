import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Close on ESC + lock body scroll when open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close when a nav link is clicked
  const handleLinkClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" aria-label="Go to home">
          <span className="logo__text">Kiran Subramani</span>
        </a>

        {/* Overlay (mobile) */}
        {open && (
          <button
            className="nav-overlay"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Nav */}
        <nav
          id="site-nav"
          className={`nav-links ${open ? "open" : ""}`}
          ref={panelRef}
          role="navigation"
          aria-label="Primary"
          onClick={handleLinkClick}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-controls="site-nav"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
