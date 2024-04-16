import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import HeaderCard from "../HeaderCard/HeaderCard";
import Food from "../Food/Food";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HeaderCard></HeaderCard>
            <Food></Food>
            <Categories></Categories>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;