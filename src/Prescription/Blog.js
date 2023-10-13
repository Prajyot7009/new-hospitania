import React from "react";
import Footer from "../Footer/Footer";

import '../Style/Blo.css'
import pro10 from "../Images/pro10.jpg"
import pro11 from "../Images/pro11.jpg.png"
import pro12 from "../Images/pro12.jpg.png"

const Blog = () => {
    return (
        <div>
            <img className="a3" src={pro11} alt="image" />
            <div className="main">
                <div className="first">
                    <h2 className="a1">Why accessories will make you question everything</h2>
                    <h3 className="a1">sep 15 <span>DsahaThemes</span> <span>0 Comments</span></h3>
                    <h5 className="a1">The oddest place you will find betting sites. Why you'll never succeed at kids sports awards. How sports fan stores are the new sports fan stores. 10 ways…</h5>
                    <h3 className="a1">Read More</h3>
                </div>
                <div className="firsts">
                    <h2 className="a1">Why accessories will make you question everything</h2>
                    <h3 className="a1">sep 15 <span>DsahaThemes</span> <span>0 Comments</span></h3>
                    <h5 className="a1">The oddest place you will find betting sites. Why you'll never succeed at kids sports awards. How sports fan stores are the new sports fan stores. 10 ways…</h5>
                    <h3 className="a1">Read More</h3>
                </div>
            </div>
            <div className="main">
                <div className="first">
                    <img className="a2" src={pro10} />
                </div>
                <img className="a2 firsts " src={pro10} />
            </div>

            <div className="main">
                <div className="first1">
                    <h2 className="a1">Why accessories will make you question everything</h2>
                    <h3 className="a1">sep 15 <span>DsahaThemes</span> <span>0 Comments</span></h3>
                    <h5 className="a1">The oddest place you will find betting sites. Why you'll never succeed at kids sports awards. How sports fan stores are the new sports fan stores. 10 ways…</h5>
                    <h3 className="a1">Read More</h3>
                </div>
                <div className="firsts2">
                    <h2 className="a1">Why accessories will make you question everything</h2>
                    <h3 className="a1">sep 15 <span>DsahaThemes</span> <span>0 Comments</span></h3>
                    <h5 className="a1">The oddest place you will find betting sites. Why you'll never succeed at kids sports awards. How sports fan stores are the new sports fan stores. 10 ways…</h5>
                    <h3 className="a1">Read More</h3>
                </div>
            </div>

            <div className="main">
                <div className="first">
                    <img className="a2" src={pro10} />
                </div>
                <img className="a2 firsts " src={pro12} />
            </div>

            <div className="main">
                <div className="first1">
                    <h2 className="a1">Why accessories will make you question everything</h2>
                    <h3 className="a1">sep 15 <span>DsahaThemes</span> <span>0 Comments</span></h3>
                    <h5 className="a1">The oddest place you will find betting sites. Why you'll never succeed at kids sports awards. How sports fan stores are the new sports fan stores. 10 ways…</h5>
                    <h3 className="a1">Read More</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Blog;