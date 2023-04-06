import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Input/>
        </div>
      </main>
    </>
  );
};

export default Home;

const Input: React.FC = () => {
  return(
    <div className=" content-center">
     <input className="w-80  outline-none " placeholder="Enter the link"/>
    <div dir="rtl">
    <div className=" rounded-s-lg">Click Me</div>
    </div>
    </div>
  );

};
