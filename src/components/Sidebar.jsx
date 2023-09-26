import React from 'react'
import logo from "../assets/reslink-logo.png"
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';

const feilds = [
    {
        name: "dashboard",
        icon: LeaderboardRoundedIcon,
    },
    {
        name: "projects",
        icon: LayersRoundedIcon,
    },
    {
        name: "staffing",
        icon: PeopleAltRoundedIcon,
    },
    {
        name: "messages ",
        icon: InsertCommentRoundedIcon,
    },
]

const bottomfeilds = [
    {
        name: "support",
        icon: BarChartRoundedIcon,
    },
    {
        name: "settings",
        icon: SettingsRoundedIcon,
    },

]


const SideBar = () => {
    const [toggle, setToggle] = React.useState(0);
    const [toggle2, setToggle2] = React.useState(-1);
    return (
        <>
            <aside className='flex sticky flex-col h-screen w-[100%] bg-[#24282e] '>
                <div className='logo flex justify-center items-center h-[70px]'>
                    <img src={logo} className=' w-[35%]' loading='lazy' alt="" />
                    <p className='text-lg side-text'>RESLINK</p>
                </div>

                {/* mapping out items */}

                <div className='flex flex-col h-screen justify-between mb-4 pb-4 border-b-[0.1rem]'>
                    <div>
                        {feilds.map((elem, index) => {
                            return (
                                <Link to={`/${elem.name}`} key={index}>
                                    <div onClick={() => {
                                        setToggle(index)
                                        setToggle2(-1)
                                    }} className={`flex ${toggle == index ? "bg-[#101215]" : "hover:bg-[#35373b]"} mt-4 rounded-md  cursor-pointer capitalize h-[2.5rem] items-center`}>
                                        <elem.icon className='mx-4' />
                                        {elem.name}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* bottom */}

                    <div>
                        {bottomfeilds.map((elem, index) => {
                            return (
                                <Link to={`/${elem.name}`} key={index}>
                                    <div onClick={() => {
                                        setToggle2(index)
                                        setToggle(-1)
                                    }} className={`flex ${toggle2 == index ? "bg-[#101215]" : "hover:bg-[#35373b]"} mt-4  rounded-md  cursor-pointer capitalize h-[2.5rem] items-center`}>
                                        <elem.icon className='mx-4' />
                                        {elem.name}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>



                {/* profile details */}

                <div className='flex items-center gap-2 mb-4'>
                    <div className='rounded-full w-[2rem] h-[2rem] overflow-hidden'>

                        <img className='h-full w-full' src="https://images.pexels.com/photos/2681741/pexels-photo-2681741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </div>
                    <span className='text-sm'>
                        <p>Olivia Rhye</p>
                        <span>olivia@untitledui.com</span>
                    </span>

                    <LogoutRoundedIcon className='text-base' />

                </div>


            </aside>
        </>
    )
}

export default SideBar
