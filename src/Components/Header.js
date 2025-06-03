import React, { useEffect, useState, useTransition } from "react";
import "../index.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
    // الكود ده بيتنفذ بس لما يترنرد المكون اما لو عايز شغال علطول بضيف لليندوز حدث التمرير وتضيف له هيعمل ايه ذي الكود الي تحت ده
    // const [cl, setcl] = useState("header-con")
    // useEffect(()=>{
    //     if(window.scrollY !== 0){
    //         setcl("header-con header-move")
    //     }
    //     else{
    //         setcl("header-con")
    //     }
    // },[])

    const [cl, setcl] = useState("header-con")
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY !== 0) {
                setcl("header-con header-move")
            }
            else {
                setcl("header-con")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => { window.removeEventListener("scroll", handleScroll) }

    }, [])

    useEffect(() => {
        let allA = document.querySelectorAll(".header-con .header-ul a");
        const scrollto = (e) => {
            e.preventDefault(); // دي عشان يوقف الحاجات التلقائية ذي انو ينط علطول للعنصر او ما اضغط
            // مش عنصر هو كائن حدث انت صنعته فوق عشان تستخدمه في الفانكشن e عشان ال  currentTarget استخدمنا  
            // عشان مفيش اي عناصر جوا اللينك اما لو كان في عناصر كانت جابت الي جوه null لو استخدمت اول واحدة هترجع لك  a عشان نجيب الاتربيوت بتاع  e.currentTarget واستخدمنا e.target ومستخدمناش 
            let att = e.currentTarget.getAttribute("href") // 
            const ele = document.querySelector(att)
            if (ele) {
                ele.scrollIntoView({
                    behavior: "smooth"
                })
            }
        }
        allA.forEach((a) => {
            a.addEventListener("click", scrollto)
        })
    }, [])


    return (
        <div className={cl}  >
            <h2 className="header-h2">Portifolio</h2>
            <nav className="header-ul">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </nav>
            <ul className="header-icons">
                <li><a href="https://www.linkedin.com/in/mahmoud-ibrahim-ab4b76290/"><FaLinkedinIn /></a></li>
                <li><a href="https://www.facebook.com/share/1WEbEv49rx/?mibextid=qi2Omg"><FaFacebookF /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="https://github.com/XKenda"><FaGithub /></a></li>
            </ul>
            <button onClick={() => {
                document.querySelector("#connect-with").scrollIntoView({
                    behavior: "smooth"
                })

            }} className="header-connect-btn">Let's connect</button>
        </div>
    )
}

export default Header;