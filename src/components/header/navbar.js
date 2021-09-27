import Link from "next/link";
import {Config} from "@utils/Config"

export default function Navbar(){

    return (
      <nav id="menu">
    <ul>  
     {/* <li>
         <Link href="/portfolio/studio">
          <a>Studio</a>
        </Link>
      </li> */}
      {Config.menuLinks.map( link => {
        return (
       <li key={link.page}>
          <Link href={link.path}>
          <a>{link.page}</a>
          </Link>
        </li>
        )
      })
    }
    </ul>
        </nav>
    );

}

