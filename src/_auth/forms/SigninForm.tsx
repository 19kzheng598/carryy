import { Button } from "@/components/ui/button"
import * as z from "zod"
import {Link, useNavigate} from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SigninValidation } from '@/lib/validation'
import Loader from "@/components/ui/shared/Loader"
import { useToast } from "@/components/ui/use-toast"
import {useSignInAccount} from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"

//Default hook 
const SigninForm = () => {
  const { toast } = useToast()
  const {checkAuthUser, isLoading: isUserLoading} = useUserContext();
  const navigate = useNavigate(); 


  const{mutateAsync: signInAccount} = useSignInAccount();

  // 1. Define your form. SigninValidation is pulled from index.ts validation 
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler and submitting a form is a async action when performing CRUD operations to appwrite
  async function onSubmit(values: z.infer<typeof SigninValidation>) {

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    if(!session){
      return toast({title: 'Sign in failed. Please try again.'})
    }

    const isLoggedIn = await checkAuthUser();
    
    if(isLoggedIn){
      form.reset();
      navigate('/')
    } 
    else {
      return toast({title: 'Sign up failed. Try again.'})
    }

  }
  
  return (
    <Form {...form}>
      <div className="sm:w-300 flex-center flex-col">
        <img src='public/assets/images/carry.svg' alt='carry logo' className="w-32 h-32"/>

        <h1 className="h2-bold">Welcome back to Carry!</h1>

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Login to your account</h2>

        <p className="text-white small-medium md:base-regular mt-2">Please enter your account details below</p>
    

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          //This is for the email box
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="text-black" type="text"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          //this is for the password box
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input className="text-black" type="text"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="shad-button_primary">
          {isUserLoading ? (
            <div className="flex center gap-2">
              <Loader/> Loading...
            </div>
          ):"Sign in"}
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          If you don't have an account: 
          <Link to={"/sign-up"} className="text-primary-500 text-small-semibold ml-2">Sign up</Link>
        </p>
      </form>
      </div>
    </Form>
  )
}

export default SigninForm