import { Button } from "@material-tailwind/react";
import { PiArrowUpRightBold } from "react-icons/pi";

const Sollutions = () => {
    return (
        <div className="container mx-auto px-5">
            <div className="w-full flex gap-20 pt-20 flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <div className="py-[10px] bg-[#FFFFF5] px-6 rounded-full border border-gray-700 text-base text-[#020043] inline-block">
                        <p>Who we are</p>
                    </div>
                    <h2 className="font-bold pt-4 pb-5 text-[36px] text-[#020043] leading-[54px] max-w-[276px]">We Help To Get Soultions</h2>
                    <p className="lg:max-w-[470px] text-[#020043]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <div className="pt-10">
                        <Button style={{ fontFamily: "Inter" }} className="flex gap-1 items-center bg-[#FFC637] text-base text-[#000] normal-case font-semibold" >Learn More <PiArrowUpRightBold /> </Button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 relative">
                    <img className="w-full rounded-3xl object-cover" src="https://i.postimg.cc/0Nw59X12/Rectangle-24.png" alt="two doctor image" />
                    <div className="bg-[#343268] w-[395px] py-[50px] px-[30px] rounded-3xl absolute left-0 bottom-0 lg:-left-[100px] lg:-bottom-[40px] p-5">
                        <h2 className="text-[26px] text-white font-semibold">Our mission is simple</h2>
                        <p className="text-white pt-5 text-base leading-[24px]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sollutions;