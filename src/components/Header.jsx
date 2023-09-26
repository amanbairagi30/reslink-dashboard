import React from 'react'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Header = () => {
    return (
        <>
            {/* input */}

            <div className='bg-[#101215] rounded-full px-2 w-[20rem] h-[3rem] outline-none border-none flex justify-center items-center '>
                <SearchRoundedIcon />
                <input type="text" placeholder='Search' className='h-full bg-[#101215] outline-none mx-2 rounded-r-full w-[20rem]' />
            </div>

            <div>
                <NotificationsActiveOutlinedIcon className='mr-4'/>

                <button className='border-none bg-[#3fa268] hover:bg-[#3cc274] hover:scale-105 hover:transition-all hover:duration-300 rounded-full px-3 h-[3rem]'>
                    <AddOutlinedIcon />
                    Create New Project
                </button>
            </div>
        </>

    )
}

export default Header
