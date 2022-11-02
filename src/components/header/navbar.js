import Link from "next/link";
import {Config} from "@utils/Config"

export default function Navbar({menuStateChanger}){

    return (
      <nav id="menu">
    <ul>  
      {Config.menuLinks.map( link => {
        return (
       <li key={link.page}>
        <Link href={link.path} 
          alt={link.alt} 
          onClick={(e)=>menuStateChanger(e)} 
          className={(link.hasOwnProperty("classes")? link.classes : "")}
          >{link.page}</Link>         
        </li>
        )
      })
    }
    </ul>
        </nav>
    );

}

