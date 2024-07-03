import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className="container mx-auto px-5 pt-[160px]">
            <div>
                <div className="py-[10px] bg-[#FFFFF5] px-6 rounded-full border border-gray-700 text-base text-[#020043] inline-block">
                    <p>Service</p>
                </div>
                <div>
                    <h2 className="text-[36px] text-[#020043] font-semibold pt-4 pb-8">What they say about us</h2>
                </div>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-[#FFFFF5] p-5 rounded-lg max-w-[380px] mb-10'>
                            <h3 className='text-[22px] font-semibold'>Expertise and Compassion Combined</h3>
                            <p className='text-[#4D4C7B] py-4'>I can&apos;t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                            <div className='flex gap-2'>
                                <div>
                                    <img src="https://i.postimg.cc/sD0qcpvp/sarah.png" alt="Sarah" />
                                </div>
                                <div>
                                    <h5 className='font-semibold pb-2'>Sarah D, <span className='font-normal'>IT Professional</span></h5>
                                    <p className='text-yellow-500 text-xl flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#FFFFF5] p-5 rounded-lg max-w-[380px]'>
                            <h3 className='text-[22px] font-semibold'>Life-Saving Care, Life-Changing Experience</h3>
                            <p className='text-[#4D4C7B] py-4'>I can&apos;t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                            <div className='flex gap-2'>
                                <div>
                                    <img src="https://i.postimg.cc/DyrdfGXq/michael.png" alt="Sarah" />
                                </div>
                                <div>
                                    <h5 className='font-semibold pb-2'>Michael R, <span className='font-normal'>IT Professional</span></h5>
                                    <p className='text-yellow-500 text-xl flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#FFFFF5] p-5 rounded-lg max-w-[380px]'>
                            <h3 className='text-[22px] font-semibold'>A Partner in Health and Wellness</h3>
                            <p className='text-[#4D4C7B] py-4'>I can&apos;t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                            <div className='flex gap-2'>
                                <div>
                                    <img src="https://i.postimg.cc/YCtNvS6T/David.png" alt="Sarah" />
                                </div>
                                <div>
                                    <h5 className='font-semibold pb-2'>David S, <span className='font-normal'>IT Professional</span></h5>
                                    <p className='text-yellow-500 text-xl flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#FFFFF5] p-5 rounded-lg max-w-[380px]'>
                            <h3 className='text-[22px] font-semibold'>Life-Saving Care, Life-Changing Experience</h3>
                            <p className='text-[#4D4C7B] py-4'>I can&apos;t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                            <div className='flex gap-2'>
                                <div>
                                    <img src="https://i.postimg.cc/DyrdfGXq/michael.png" alt="Sarah" />
                                </div>
                                <div>
                                    <h5 className='font-semibold pb-2'>Michael R, <span className='font-normal'>IT Professional</span></h5>
                                    <p className='text-yellow-500 text-xl flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;