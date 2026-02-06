import Image from "next/image";
import { ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";

export default function Profile() {
    return (
        <section className="bg-white h-screen font-inter">
            <div className="max-w-103 mx-auto px-4">
                <Link href="/welcome" className="pt-3 block">
                    <ArrowLeft strokeWidth={1} />
                </Link>
                <figure className="flex justify-center mt-18">
                    <Image
                        src="/images/profilep.svg"
                        alt="logo"
                        height={136}
                        width={136}
                    />
                </figure>
                <div className="mt-20">
                    <div className="border-b border-b-[#3C3C432E] pb-2.5">
                        <h1 className="text-base text-[#00000099]">
                            Full Name
                        </h1>
                        <p className="text-black text-base">Stephanie Abrams</p>
                    </div>
                    <div className="pt-2 border-b border-b-[#3C3C432E] pb-2.5">
                        <h1 className="text-base text-[#00000099]">Email</h1>
                        <p className="text-black text-base mt-1.5">
                            Stephanieabrams36@gmail.com
                        </p>
                    </div>
                    <div className="border-b border-b-[#3C3C432E] pb-2.5">
                        <h1 className="text-base text-[#00000099]">Password</h1>
                        <p className="text-black text-base">********</p>
                    </div>
                    <Link href="/" className="mt-3.5 flex items-center gap-3.5">
                        <LogOut />
                        <span>Log Out</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
