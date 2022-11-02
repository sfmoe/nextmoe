import Navbar from "./navbar"
import Link from "next/link"
import { useEffect } from "react";

export default function Header(){

    const nightModeToggle = () =>{
       document.querySelector("html").classList.toggle("nightmode");
       localStorage.getItem("darkmode") || localStorage.setItem("darkmode", false);
    }

    const menuHandler = (e)=>{
        
        if(e.target.classList.contains("toggle-nightmode")) {
            e.preventDefault();
            nightModeToggle();
        } 
        //hide menu on click
       const burger = document.querySelector("#burger");
       burger.checked = false;
    
    };

    useEffect(()=>{
        let darkmodeStatus = localStorage.getItem("darkmode") || false;
        (darkmodeStatus)? nightModeToggle() : null;
    }, [])

    return (
            <>
            <a href="#main" id="skip_to_main"> <span>skip to main</span> </a>
            <header>
                
                <h1><Link href="/"><span>Moe Martinez</span></Link></h1>
    
                <input id="burger" type="checkbox" />
                
                <label htmlFor="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                        <Navbar menuStateChanger={menuHandler} />
            </header> 
            </>
        );
}

