import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
    const{pathname} = useLocation(); 


    return (
        <section className="bottom-bar">
                    {bottombarLinks.map((link) => {
                        const isActive = pathname === link.route; 
                        return (
                            <Link to={link.route} key={link.label}
                            className={` ${
                            isActive && "bg-primary-500 rounded-full"
                                }flex-center flex-col gap-1 p-2 transition`}>
                                <p className="">{link.label}</p>
                            </Link>                           
                        )
                    })}
        </section>
    )
}

export default Bottombar