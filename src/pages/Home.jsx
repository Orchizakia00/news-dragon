import BreakingNews from "./BreakingNews";
import Header from "./shared/header/Header";
import LeftSideNav from "./shared/leftSideNav/LeftSideNav";
import Navbar from "./shared/navbar/Navbar";
import RightSideNav from "./shared/rightSideNav/RightSideNav";

const Home = () => {
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
                    <h2>news coming soon...</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;