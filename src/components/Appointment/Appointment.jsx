import { Button } from "@material-tailwind/react";
import { PiArrowUpRightBold } from "react-icons/pi";

const Appointment = () => {
    return (
        <div className="container mx-auto px-5 pt-[160px]">
            <div className="w-full h-[500px] bg-[url('https://i.postimg.cc/13qhJ6vV/Group-43.png')] rounded-3xl bg-cover bg-center bg-no-repeat p-[60px]">
                <div className="flex justify-end">
                    <img src="https://i.postimg.cc/pXmgLzbc/logo-light.png" alt="Logo" />
                </div>
                <div>
                    <h1 className="text-[40px] font-semibold text-white leading-[60px]">Get Your <span className="block">First Appointment</span> at 50% Off!</h1>
                    <div className="pt-10 flex gap-5">
                        <Button style={{ fontFamily: "Inter" }} className="flex gap-1 items-center bg-[#FFC637] text-base text-[#000] normal-case font-semibold" >Appoinment <PiArrowUpRightBold /> </Button>
                        <Button style={{ fontFamily: "Inter" }} className="flex gap-1 items-center bg-transparent text-base text-[#fff] border border-white normal-case font-semibold" >Appoinment <PiArrowUpRightBold /> </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;