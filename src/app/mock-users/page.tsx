import { revalidatePath } from "next/cache";
import {auth, currentUser} from "@clerk/nextjs/server";

type MockUser = {
    id : number;
    name : string;
}

export default async function MockUsers() {

    const authObj = await auth()
    const userObj = await currentUser()

    console.log({
        authObj,
        userObj 
    });

    const res = await fetch("https://67ffda88b72e9cfaf72618b2.mockapi.io/users")

    const users = await res.json();

    async function addUser(formData: FormData) {
        "use server"
        // use server above allows us to use api keys on the server
        const name = formData.get("name");
        const res = await fetch ("https://67ffda88b72e9cfaf72618b2.mockapi.io/users",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        });

        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);

    }

  return (
    <div className='py-10 px-10'>
        <form action={addUser} className='mb-4 flex flex-row'>
            <input type='text' name='name' required className='border border-gray-300 text-white text-sm rounded-lg block w-1/2 p-2.5' placeholder='Enter your name'/>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4   rounded'>Add User</button>
        </form>
        <div className='grid grid-cols-4 gap-4 py-10'>
            {
                users.map((user: MockUser) => (
                    <div key={user.id} className='p-4 bg-white shadow-md rounded-lg text-gray-700'>
                        {user.name}
                    </div>  
                ))
            }
        </div>
    </div>
  )
}
