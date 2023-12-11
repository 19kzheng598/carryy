import{Link, useNavigate} from 'react-router-dom'
import { Button } from '../button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';

    const Topbar = () => {

        const{mutate: signOut, isSuccess} = useSignOutAccount();
        const navigate = useNavigate();
        const {user} = useUserContext();

        useEffect(() => {
            if(isSuccess) navigate(0);
        }, [isSuccess])
    

    return (
        <section className="topbar">
            <div className="flex-between py-1 px-1">
                <Link to="/" className="flex items-center justify-center">
                    <img src="dist/assets/icons/carry.svg" alt="carrylogo" className="w-16 h-16"/>
                    <h1 className="h3-bold">Carry!</h1>
                </Link>

                <div className= "flex gap-1">
                    <Button variant="ghost" className="shad-button_ghost" onClick={ () => signOut()}>
                        Logout
                    </Button>
                    <Link to={'/profile/${user.id}'} className="flex-center gap-3">
                        <img src={user.imageUrl || 'public/assets/icons/profile-placeholder.svg'} alt="Profile" className = 'h-8 w-8 rounded-full'/>
                    </Link>
                </div>
                
            </div>
    </section>
    )
}

export default Topbar