import Image from "next/image";
import Link from "next/link";
import { UserRound, Star, DollarSign, House } from "lucide-react";

export default function Welcome() {
    return (
        <>
            <section className="bg-[#004488] font-inter pt-10 pb-14">
                <div className="max-w-103 mx-auto px-4">
                    <h3 className="text-sm font-medium text-center text-white">
                        Welcome Stephanie Car...4356
                    </h3>

                    <div className="mt-14">
                        <h1 className="text-center mt-0.5 font-bold text-sm text-white">
                            CURRENT BALANCE
                        </h1>
                        <p className="text-white text-center font-medium text-[40px]">
                            $5,818,300
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-12">
                        <div>
                            <h1 className="text-white font-light text-[11px]">
                                CHECKING
                            </h1>
                            <p className="text-white font-medium text-xl">
                                $8,300
                            </p>
                        </div>
                        <div>
                            <h1 className="text-white font-light text-[11px]">
                                INVESTMENT
                            </h1>
                            <p className="text-white font-medium text-xl">
                                $2,810,000
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-103 mx-auto px-4 font-inter pb6">
                <h1 className="font-medium text-[15px] mt-4 w-fit pb-2.5 border-b-4 text-[#004488]">
                    Activity
                </h1>
                <div className="mt-7">
                    <div className="h-[calc(100vh-500px)] overflow-y-scroll no-scrollbar">
                        <h2 className="text-black text-xs">Feb 4</h2>
                        <div className="mt-2 py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/service.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Subscription Service
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$30</p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/leneous.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Miscelleneous
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$160</p>
                        </div>

                        <h2 className="text-black text-xs mt-1.5">Feb 3</h2>
                        <div className="mt-2 py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/house.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Rent/Housing
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$150</p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/uber.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Uber/Transport
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$46</p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/medical.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Medical/Pharmacy
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$68</p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/medical.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Medical/Pharmacy
                                    </h1>
                                    <p className="text-xs text-[#F12020FF]">
                                        Declined
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#F12020FF] text-xl">-$68</p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/shop.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Shopping/Walmart
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$110</p>
                        </div>

                        <h2 className="text-black text-xs mt-1.5">Feb 2</h2>
                        <div className="mt-2 py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/food.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Restaurant/Food
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$58</p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/credit.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Utility Bill
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl font-normal">
                                -$212
                            </p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/amazon.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Amazon Purchase
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl font-normal">
                                -$129
                            </p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/phone.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Phone Bill
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl font-normal">
                                -$165
                            </p>
                        </div>

                        <h2 className="text-black text-xs mt-1.5">Feb 1</h2>
                        <div className="mt-2 py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/shop.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Grocery Shopping
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">-$186</p>
                        </div>
                        <div className="py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/gas.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Gas Station
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Approved
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl font-normal">
                                -$74
                            </p>
                        </div>

                        <h2 className="text-black text-xs mt-1.5">Oct 12</h2>
                        <div className="mt-2 py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/credit.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Credit
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Mid Valley Financial
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">+$4,400,000</p>
                        </div>
                        <div className="mt-2 py-2.75 border-b-[#9A9A9AA1] border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/credit.svg"
                                    alt="logo"
                                    height={30}
                                    width={30}
                                />
                                <div>
                                    <h1 className="text-black text-sm">
                                        Credit
                                    </h1>
                                    <p className="text-xs text-[#000000A1]">
                                        Valley Crest Holdings
                                    </p>
                                </div>
                            </div>
                            <p className="text-black text-xl">+$1,400,000</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
