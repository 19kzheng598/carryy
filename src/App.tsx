import {Routes, Route} from 'react-router-dom';
import './globals.css';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import SigninForm from './_auth/forms/SigninForm';
import AuthLayout from './_auth/AuthLayout'; 
import RootLayout from './_root/RootLayout'; 


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        
        {/*public page view*/}
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
        </Route>

        {/*private page view*/}
        <Route element={<RootLayout/>}> 
          <Route index element={<Home />}/>
        </Route>

      </Routes>

    </main>
  )
}

export default App