import Navbar from "./navbar"
import Link from "next/link"
import { useEffect } from "react";

export default function Header(){

    const nightModeToggle = () =>{
       let setDark = localStorage.getItem("darkmode") === 'true';
       localStorage.setItem("darkmode", !setDark)
       document.querySelector("html").classList.toggle("nightmode");
    }

    const menuHandler = (e)=>{
        //handle nightmode toggle
        if(e.target.classList.contains("toggle-nightmode")) {
            e.preventDefault();
            nightModeToggle();
        } 
        //hide menu on click
       const burger = document.querySelector("#burger");
       burger.checked = false;
    
    };

    useEffect(()=>{
       let darkmode = localStorage.getItem("darkmode");

       if(darkmode==null){
        localStorage.setItem("darkmode", "false");
        return;
       }

       if(darkmode == "true"){
        document.querySelector("html").classList.add("nightmode")
       }
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

