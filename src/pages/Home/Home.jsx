import Appointment from "../../components/Appointment/Appointment";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import Menubar from "../../components/Menubar/Menubar";
import Service from "../../components/Service/Service";
import Sollutions from "../../components/Sollutions/Sollutions";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from './../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Menubar/>
            <Banner/>
            <Sollutions/>
            <Service/>
            <Testimonial/>
            <Faq/>
            <Appointment/>
            <Footer/>
        </div>
    );
};

export default Home;