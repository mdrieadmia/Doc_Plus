import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


const Faq = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="container mx-auto px-5 pt-[160px]">
            <div>
                <div className="py-[10px] bg-[#FFFFF5] px-6 rounded-full border border-gray-700 text-base text-[#020043] inline-block">
                    <p>FAQ</p>
                </div>
                <h2 className="font-bold pt-4 pb-5 text-[36px] text-[#020043] leading-[54px]">Frequntly Asked Question</h2>
            </div>
            <div>
                <Accordion className="bg-[#FBFBFB]" open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}> What are your office hours?</AccordionHeader>
                    <AccordionBody>
                        Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                    </AccordionBody>
                </Accordion>
                <Accordion className="bg-[#FBFBFB]" open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How can I schedule an appointment?
                    </AccordionHeader>
                    <AccordionBody>
                        To schedule an appointment, visit our Contact Us page, select Book an Appointment,choose your preferred date and time, and submit the form. We will confirm your appointment shortly.
                    </AccordionBody>
                </Accordion>
                <Accordion className="bg-[#FBFBFB]" open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        What should I bring to my appointment?
                    </AccordionHeader>
                    <AccordionBody>
                        For your appointment, please bring a valid ID, any relevant documents, and your appointment confirmation. If applicable, bring insurance information and a list of medications you are currently taking.
                    </AccordionBody>
                </Accordion>
                <Accordion className="bg-[#FBFBFB]" open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        What should I bring to my appointment?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, we offer telemedicine appointments. You can book a virtual visit through our Telemedicine section on the website. Ensure you have a stable internet connection and a device with a camera and microphone.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;