import Navbar from "./Navbar"
import Link from "next/link"

export default function Header(){


    const menuHandler = (status)=>{
       const burger = document.querySelector("#burger");
       burger.checked = false;
    };

        return (
            <header>
                <h1><Link href="/"><a><span>Moe Martinez</span></a></Link></h1>
    
                <input id="burger" type="checkbox" />
                
                <label htmlFor="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                        <Navbar menuStateChanger={menuHandler}/>
            </header> 
        );
}

