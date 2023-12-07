import { Button } from "@/components/ui/button"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from '@/lib/validation'

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const SignupForm = () => {
  const isLoading = true;
   // 1. Define your form.
   const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      username: "",
      email: '',
      password: '',
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  
  return (
    <Form {...form}>
      <div className="sm:w-300 flex-center flex-col">
        <img src='public/carry.png' alt='carry logo' className="w-32 h-32"/>

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>

        <p className="text-white small-medium md:base-regular mt-2">To use Carry enter your account details</p>
    

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
        //This is for the name box
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="text-black" type="text"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
        //This is for the username box
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="text-black" type="text"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          {isLoading ? 
          (
            <div className="flex center gap-2">
              Loading...
            </div>
          ):
          (
            "Sign up"
          )
          }
        </Button>
      </form>
      </div>
    </Form>
  )
}

export default SignupForm