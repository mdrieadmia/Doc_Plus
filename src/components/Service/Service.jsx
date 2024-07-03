import { Button } from "@material-tailwind/react";
import { PiArrowUpRightBold } from "react-icons/pi";

const Service = () => {
    return (
        <div className="container mx-auto bg-[#FFFFF5] p-10 rounded-[32px] mt-[160px]">
            <div className="w-full flex gap-20 flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <div className="py-[10px] bg-[#FFFFF5] px-6 rounded-full border border-gray-700 text-base text-[#020043] inline-block">
                        <p>Service</p>
                    </div>
                    <h2 className="font-bold pt-4 pb-5 text-[36px] text-[#020043] leading-[54px] max-w-[420px]">Empowering Health, Enriching Lives</h2>
                    <p className="max-w-[420px] text-[#020043]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <div className="pt-10">
                        <Button style={{ fontFamily: "Inter" }} className="flex gap-1 items-center bg-[#FFC637] text-base text-[#000] normal-case font-semibold" >Appoinment <PiArrowUpRightBold /> </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-[url('https://i.postimg.cc/Z5qFsptL/Rectangle-27-2.png')] bg-cover bg-center bg-no-repeat rounded-[32px] flex items-end p-5">
                    <div className="bg-[#343268] w-[395px] py-[50px] px-[30px] rounded-3xl">
                        <h2 className="text-[26px] text-white font-semibold">Our mission is simple</h2>
                        <p className="text-white pt-5 text-base leading-[24px]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
            <div className="pt-[60px] flex gap-[28px] flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-[url('https://i.postimg.cc/LsdgLfQc/Rectangle-27-1.png')] h-[400px] bg-cover flex items-end bg-center bg-no-repeat rounded-[32px] p-[20px]">
                    <div className="bg-[#02004398] w-[320px] p-[18px] text-white rounded-[32px] ">
                        <h1 className="text-[20px] font-semibold pb-3">Online Doctor Meet</h1>
                        <p className="text-[12px] ">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        <div className="flex justify-end -mt-5">
                            <img src="https://i.postimg.cc/nzSHYfcX/arrow.png" alt="Arrow" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-[url('https://i.postimg.cc/sDm4JK8X/Rectangle-27.png')] h-[400px] bg-cover flex items-end bg-center bg-no-repeat rounded-[32px] p-[20px]">
                    <div className="bg-[#02004398] w-[320px] p-[18px] text-white rounded-[32px] ">
                        <h1 className="text-[20px] font-semibold pb-3">Consultancy your health</h1>
                        <p className="text-[12px] ">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        <div className="flex justify-end -mt-5">
                            <img src="https://i.postimg.cc/nzSHYfcX/arrow.png" alt="Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;