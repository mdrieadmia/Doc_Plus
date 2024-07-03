
const Banner = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/VN4X1NqF/bg.jpg')] h-[1050px] bg-cover w-full bg-center bg-no-repeat ">
            <div className="container mx-auto px-5 pt-24">
                <div className="h-[470px] w-full bg-[url('https://i.postimg.cc/0j5CPR7Q/Rectangle-5.png')] bg-cover bg-center bg-no-repeat rounded-[35px]">
                    <div className="h-full w-full  rounded-[35px] bg-custom-gradient"></div>
                </div>
                <div>
                    <div>
                        <h2 className="max-w-[532px] text-[48px] font-bold text-[#020043] leading-[116.9%] text-center mx-auto pt-10">Comprehensive Care for Every Patient</h2>
                    </div>
                    <div className="flex justify-between gap-5 items-end -mt-20">
                        <div className="bg-white p-5 rounded-2xl w-full h-[312px]">
                            <h3 className="text-[40px] font-semibold text-[#020043]">90%</h3>
                            <p>Patient satisfaction rate, reflecting our commitment.</p>
                            <img src="https://i.postimg.cc/GpYDhn5b/pie.png" alt="Pie Image" />
                        </div>
                        <div className="bg-white p-5 rounded-2xl w-full h-[190px]">
                            <h3 className="text-[40px] font-semibold text-[#020043]">500+</h3>
                            <p>Board-certified doctors</p>
                            <img src="https://i.postimg.cc/WbbfD5VB/badge.png" alt="Pie Image" />
                        </div>
                        <div className="bg-white p-5 rounded-2xl w-full h-[162px]">
                            <h3 className="text-[40px] font-semibold text-[#020043]">4.8 <span><img src="https://i.postimg.cc/SsxzLYKx/star.png" alt="Star" /></span></h3>
                            <p>Over 20,000 Patient</p>
                            <img src="https://i.postimg.cc/hjWRDSKf/members.png" alt="Pie Image" />
                        </div>
                        <div className="bg-white p-5 rounded-2xl w-full h-[190px]">
                            <h3 className="text-[40px] font-semibold text-[#020043]">$5000</h3>
                            <p>Money spend for poor patient</p>
                            <img src="https://i.postimg.cc/brMbwYpN/coins.png" alt="Pie Image" />
                        </div>
                        <div className="bg-white p-5 rounded-2xl w-full h-[312px]">
                            <h3 className="text-[40px] font-semibold text-[#020043]">50+</h3>
                            <p>Free lession video for patient</p>
                            <img src="https://i.postimg.cc/2jdr5Bbm/camera.png" alt="Camera Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;