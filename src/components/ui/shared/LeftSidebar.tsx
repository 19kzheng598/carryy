import{Link, useNavigate, NavLink, useLocation} from 'react-router-dom';
import { Button } from '../button';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';
import { sidebarLinks } from '@/constants';
import { INavLink } from '@/types';

const LeftSidebar = () => {
    const{pathname} = useLocation();
    const{mutate: signOut, isSuccess} = useSignOutAccount();
    const navigate = useNavigate();
    const {user} = useUserContext();

    useEffect(() => {
        if(isSuccess) navigate(0);
    }, [isSuccess])


    return (
        <nav className="leftsidebar">
            <div className="flex flex-col">
                <Link to="/" className="flex items-center justify-center">
                    <img src="dist/assets/icons/carry.svg" alt="carrylogo" className="w-20 h-20"/>
                </Link>
                <h2 className="h3-bold flex items-center justify-center">Carry!</h2>
                
            </div>

            <ul className="flex flex-col justify-center items-center gap-6">
                    {sidebarLinks.map((link: INavLink) => {
                        const isActive = pathname === link.route; 
                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${
                                isActive && "bg-primary-500"
                            }`}>
                                <NavLink to={link.route} className="flex gap-4 items-center p-4">
                                    {link.label}
                                </NavLink>
                            </li>                            
                        )
                    })}
                </ul>

            <div className="flex items-center justify-left gap-3">
                <Link to={"/profile/${user.id}"} className="flex items-center justify-left gap-3">
                    <img className="h-14 w-14 rounded-full" src={user.imageUrl || "/public/assets/icons/profile-placeholder.svg"}></img>
                    <div className="flex flex-col">
                        <p className="body-bold">{user.name}</p>
                        <p className="flex flex-col small-regular text-light-3">@{user.username}</p>
                    </div>
                </Link>
                <Button variant="ghost" className="shad-button_ghost z-10" onClick={ () => signOut()}>
                    <p className="text-2xl">|</p>
                    <p className="small-medium lg:base-medium">Logout</p>
                </Button>                
            </div>
        </nav>
    )
}

export default LeftSidebar