import { getServerSession } from "next-auth";
import { Poppins } from "next/font/google";
import { authOptions } from "../api/auth/[...nextauth]/route";

const poppins = Poppins({weight: [ '100','200','300','400','500','600','700','800','900' ], subsets: ['latin']})

export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ["about", "about page" ]
  };

  const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', );
    const data = await res.json()
    return data.currentTime;
  }
//   {cache: 'no-store'} //
// {next : {revalidate : 5 }} //


const AboutPage = async () => {
    const session = await getServerSession(authOptions)
    console.log(session)
    const currentTime = await getTime()

    return (
        <div className={`${poppins.className} min-h-screen px-12 py-24`}>
            <h6 className='text-3xl'>About Page</h6>
            <h3 className="text-3xl text-red-400 mt-12">
              Time : 
              {currentTime} 
              </h3>
        </div>
    );
};

export default AboutPage;