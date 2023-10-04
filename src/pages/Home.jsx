import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./shared/header/Header";
import LeftSideNav from "./shared/leftSideNav/LeftSideNav";
import Navbar from "./shared/navbar/Navbar";
import RightSideNav from "./shared/rightSideNav/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    console.log(news);

    return (
        <div className="font-poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;