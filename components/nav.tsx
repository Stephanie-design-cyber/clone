"use client";

import Link from "next/link";
import { UserRound, Star, DollarSign, House } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Nav() {
    const path = usePathname();

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white px-4">
            <div className="max-w-103 mx-auto flex justify-around pb-3 pt-3 border-t border-gray-200">
                <Link
                    href="/welcome"
                    className="flex items-center flex-col gap-1"
                >
                    <House
                        color={`${path === "/welcome" ? "#004488" : "#00000080"}`}
                        size={17}
                        strokeWidth={1}
                    />
                    <span className="text-sm text-[#00000080]">Home</span>
                </Link>
                <div className="flex items-center cursor-pointer flex-col gap-1">
                    <DollarSign color="#00000080" size={17} strokeWidth={1} />
                    <span className="text-sm text-[#00000080]">Payments</span>
                </div>
                <div className="flex items-center cursor-pointer flex-col gap-1">
                    <Star color="#00000080" size={17} strokeWidth={1} />
                    <span className="text-sm text-[#00000080]">Services</span>
                </div>
                <Link
                    href="/profile"
                    className="flex items-center flex-col gap-1"
                >
                    <UserRound
                        color={`${path === "/profile" ? "#004488" : "#00000080"}`}
                        size={17}
                        strokeWidth={1}
                    />
                    <span className="text-sm text-[#00000080]">Profile</span>
                </Link>
            </div>
        </div>
    );
}
