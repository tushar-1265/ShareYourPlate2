import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { Client, Databases, ID } from "appwrite";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';

const Donate = () => {

    const [credentials, setCredentials] = useState({ name: '', description: '', address: '', phoneNo: '' });
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    const { isLoaded, isSignedIn } = useUser();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    

    useEffect(() => {

        if (isLoaded && !isSignedIn) {
          router.push('/sign-in');
        }
      }, [isSignedIn]);

    const handleSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();
        console.log(credentials)

        const client = new Client();
        const databases = new Databases(client);
        client
            .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
            .setProject('6494219978ee1cfa896c') // Your project ID

        const result = await databases.createDocument('649422087c73c9c82a50', '6494221c03021acf5aff', ID.unique(),
            {
                name: credentials.name,
                address: credentials.address,
                phoneNo: credentials.phoneNo,
                description: credentials.description
            })

            setLoader(false)
        toast.promise(
            Promise.resolve(result), // Use `Promise.resolve` to create a resolved promise with the fileId
            {
                success: () => 'Details successfully uploaded!',
                error: () => 'Error uploading details.',
                duration: 3000,
                position: 'top-center',
            }
        );

        console.log(result)

        setCredentials({
            name: '',
            address: '',
            phoneNo: '',
            description: '',
        })


    }

   

    return (
        <>
            <Toaster />
            <div
                id='waitlist' className="container rounded-xl space-y-5 lg:space-x-6 bg-[rgba(255,255,255,0.2)] lg:mx-auto lg:w-3/4 p-10 my-10 mt-32 text-white flex flex-col lg:flex-row items-center justify-center">
                <div className="fomo">
                    <Image src='/asking.svg' width={500} height={500} alt='fomo' />
                </div>
                <form className='flex flex-col w-full  lg:w-1/2 space-y-8' action="">
                    <input
                        required onChange={onChange} value={credentials.name} className='p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]' type="text" name="name" id="name" placeholder='Enter your name' />
                    <input
                        required onChange={onChange} value={credentials.address} className='p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]' type="text" name="address" id="address" placeholder='Enter your address' />
                    {}

                    <input
                        required onChange={onChange} value={credentials.phoneNo} className='p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]' type="number" name="phoneNo" id="phoneNo" placeholder='Enter your mobile number' />

                    <textarea onChange={onChange} id="description" name='description' value={credentials.description} className="p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]" rows="4" placeholder="Enter a brief description of the food" required />
                    <button
                        title='Submit'
                        onClick={handleSubmit}
                        className={`overflow-hidden h-12 flex items-center justify-center border border-[rgba(255,255,255,0.4)] before:-translate-x-[40rem] hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-4 rounded-md before:transition-all before:duration-500`}>
                        {loader && <Image className='relative mr-2 h-10 w-10' src='https://samherbert.net/svg-loaders/svg-loaders/three-dots.svg' width={500} height={500} alt='clip' />}
                        {!loader && <span className={`relative font-roboto text-lg transition-all duration-500`}>Submit</span>}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Donate