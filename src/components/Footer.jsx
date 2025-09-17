import React from "react";
import './App.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kiran. Built with React.</p>
    </footer>
  );
}
