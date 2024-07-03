import Banner from "../../components/Banner/Banner";
import Menubar from "../../components/Menubar/Menubar";
import Service from "../../components/Service/Service";
import Sollutions from "../../components/Sollutions/Sollutions";
import Footer from './../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Menubar/>
            <Banner/>
            <Sollutions/>
            <Service/>
            <Footer/>
        </div>
    );
};

export default Home;