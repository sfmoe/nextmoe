import Navbar from "./navbar"
import Link from "next/link"
export default function Header(){
        return (
            <header>
                <h1><Link href="/"><a><span>Moe Martinez</span></a></Link></h1>
    
                <input id="burger" type="checkbox" />
                
                <label htmlFor="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                        <Navbar />
            </header> 
        );
}

