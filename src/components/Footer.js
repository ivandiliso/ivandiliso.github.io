import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Footer() {
    return (
        <div>
            <footer className="footer bg-dark text-center text-white fixed-bottom">
                <div className="p-1 fw-lighter" style={{ fontWeight: 'lighter', fontSize: '0.7rem' }}>
                    Developed by Ivan Diliso. Powered by React and Boostrap
                </div>
            </footer>
        </div>
    );
}