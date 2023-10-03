import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-4'>
                <h2 className='text-3xl'>Login With</h2>
                <button className="btn btn-outline w-full normal-case">
                    <FaGoogle></FaGoogle>
                    Log in with Google
                </button>
                <button className="btn btn-outline w-full normal-case">
                    <FaGithub></FaGithub>
                    Log in with GitHub
                </button>
            </div>
            <div className='p-4 mb-4'>
                <h2 className='text-3xl mb-4'>Find Us On</h2>
                <a className='p-4 flex text-lg rounded-t-lg items-center border gap-2 ' href="">
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x gap-2' href="">
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
                <a className='p-4 flex text-lg rounded-b-lg items-center border gap-2' href="">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
            </div>
            <div className='p-4 space-y-4 mb-4'>
                <h2 className='text-3xl'>Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;