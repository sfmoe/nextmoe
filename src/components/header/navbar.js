import Link from "next/link";
import {Config} from "@utils/Config"

export default function Navbar({menuStateChanger, portfolioMenus}){
  if(portfolioMenus){

 
  const reMenu  = portfolioMenus.map( i=>{
    if(typeof i.order == "number"){
      return { page: i.portfolioTitle, path:`/portfolio/${i.portfolioTitle}`, alt: `${i.portfolioTitle} portfolio` }
    }
  }).filter(e=> typeof e == "object");

  }else{
    const reMenu = [];
  }
    return (
      <nav id="menu">
    <ul>  
      {[...reMenu, ...Config.menuLinks].map( link => {
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

