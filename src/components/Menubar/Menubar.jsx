import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { PiArrowUpRightBold } from "react-icons/pi";

const Menubar = () => {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ fontFamily: "Inter" }}
            >
                <p className="flex items-center text-[#020043] hover:text-[#FFC637] duration-200 cursor-pointer border-b-2 border-transparent hover:border-[#FFC637] pb-1">
                    Home
                </p>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ fontFamily: "Inter" }}
            >
                <p className="flex items-center text-[#020043] hover:text-[#FFC637] duration-200 cursor-pointer border-b-2 border-transparent hover:border-[#FFC637] pb-1">
                    Service
                </p>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ fontFamily: "Inter" }}
            >
                <p className="flex items-center text-[#020043] hover:text-[#FFC637] duration-200 cursor-pointer border-b-2 border-transparent hover:border-[#FFC637] pb-1">
                    Blog
                </p>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ fontFamily: "Inter" }}
            >
                <p className="flex items-center text-[#020043] hover:text-[#FFC637] duration-200 cursor-pointer border-b-2 border-transparent hover:border-[#FFC637] pb-1">
                    About Us
                </p>
            </Typography>
        </ul>
    );


    return (
        <div>
            <div className="container mx-auto px-5">
                <Navbar style={{ backgroundColor: "#E4E3EA"}} className="fixed top-0 z-90 w-full sm:max-w-[640px] md:max-w-[768px] border-transparent lg:max-w-[1024px] xl:max-w-[1280px] rounded-none shadow-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent backdrop-blur-none backdrop-saturate-30">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography
                            as="span"
                            href="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <img className="h-8" src="https://i.postimg.cc/ydj4VNFV/logo-dark.png" alt="" />
                        </Typography>
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>

                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block border border-[#020043] text-[#020043] rounded-lg"
                                style={{ background: "#fff", backgroundColor: "transparent" }}
                            >
                                <span style={{ fontFamily: "Inter" }} className="flex font-medium justify-items-center items-center gap-1 normal-case ">Appointment <PiArrowUpRightBold /> </span>
                            </Button>
                        </div>
                    </div>
                    <MobileNav open={openNav}>
                        {navList}
                        <div className="flex items-center gap-x-1">

                            <Button fullWidth variant="gradient" size="sm" className="">
                                <span>Sign in <PiArrowUpRightBold /> </span>
                            </Button>
                        </div>
                    </MobileNav>
                </Navbar>
                <div className="mx-auto max-w-screen-md ">
                </div>
            </div>
        </div>
    );
};

export default Menubar;