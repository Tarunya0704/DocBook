
import Patientform from "@/components/forms/Patientform";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="flex h-screen max-h-screen ">
    <section className="remove-scrollbar my-auto container">
      <div className="sub-container max-w-[496px]">
        <Image
        src='/assets/icons/logo-full.svg'
        height={1000}
        width={1000}
         alt="logo"
         className="mb-12 h-10 w-fit" />
         <Patientform/>
         <div className="text-14-regular flex mt-20 justify-between">
         <p className="justify-items-end text-dark-600 xl:text-left">
          © 2024 DocBook
         </p>
         <Link href='/?admin=true' className="text-green-500">
         Admin

         </Link>
         </div>

      </div>

    </section>
<Image 
src='/assets/images/onboarding-img.png'
height={1000}
width={1000}
alt=''
className="side-img max-w-[50%]"/>


   </div>
  );
}

