import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import yellow from "../assets/yellow.svg"
import orange from "../assets/orange.svg"
import blue from "../assets/blue.svg"
import green from "../assets/green.svg"
import white from "../assets/white.svg"
import "../index.css"

const data = [
  {
    name: "Active Project",
    amount: '07',
    icon: PersonOutlineOutlinedIcon
  },
  {
    name: "Proposals",
    amount: '04',
    icon: BorderColorOutlinedIcon
  },
  {
    name: "Active Jobs",
    amount: '03',
    icon: BookmarkBorderRoundedIcon
  },
  {
    name: "Applications",
    amount: 240,
    icon: RemoveRedEyeOutlinedIcon
  },
]

const postedProject = [
  {
    name: "Thermal protective performance and mult",
    status: "Resume review",
    color: yellow,
  },
  {
    name: "Effect of heat flux and moisture cont...",
    status: "Interview",
    color: orange,
  },
  {
    name: "Thermal protective performance an...",
    status: "Task",
    color: blue,
  },
  {
    name: "Testing and evaluation of functional....",
    status: "Payment",
    color: green,
  },
  {
    name: "Development of thermal liner for Ext....",
    status: "Closed",
    color: white,
  },
  {
    name: "Testing and evaluation of functional....",
    status: "Payment",
    color: green,
  },

]
const recentProject = [
  {
    name: "Interview is scheduled for 12PM",
    time: "6:29PM",
    color: blue,
  },
  {
    name: "Applicant applied on Technical researcher",
    status: "8:21PM",
    color: yellow,
  },
  {
    name: "Interview is cancelled.",
    status: "7:10PM",
    color: orange,
  },
  {
    name: "Applicant applied on Technical researcher",
    status: "6:29PM",
    color: yellow,
  },
  {
    name: "Recieved Proposal",
    status: "6:29PM",
    color: green,
  },
  {
    name: "Testing and evaluation of functional....",
    status: "6:29PM",
    color: blue,
  },

]


const Dashboard = () => {
  return (
    <main className=''>
      {/* Headings */}

      <h2 className='text-[30px]'>Welcome back , Olivia</h2>
      <p className='text-sm'>Track , manage researchers and submissions</p>


      {/* Stats */}
      <div className="grid gap-6 grid-cols-4 mt-4 cursor-pointer">
        {data.map((item, index) => {
          return (
            <div className='flex w-full  border-[0.15rem] border-[#464d4f] bg-[#292c33] items-center rounded-md justify-between px-4 py-6'>

              <div>
                <p className='text-3xl font-semibold'>{item.amount}</p>
                <span>{item.name}</span>
              </div>
              <div className='bg-[#3cc274] rounded-full flex items-center justify-center text-center h-[3rem] w-[3rem]'>
                <item.icon />
              </div>
            </div>
          )
        })}


        <div className='col-span-2 cards flex flex-col border rounded-md border-[#464d4f] '>

          <div className='border px-3 border-[#464d4f] flex items-end pb-3 justify-between  h-[4rem]'>
            <p className='text-xl font-semibold tracking-wider '>Posted Projects</p>
            <span className='underline'>See All</span>
          </div>
          <div className='border  border-[#464d4f] border-t-0 rounded-b-md'>
            {/* mapping out the items */}
            {postedProject.map((item, index) => {
              return (
                <div className=' flex mx-3 items-center text-left text-sm p-1 m-3 rounded-md bg-[#252a2f] justify- gap-8'>
                  <p className='  !w-[60%]  overflow-hidden'>{item.name}...</p>
                  <div className=' p-1 flex items-center  gap-2'>
                    <img src={item.color} alt="" />
                    {item.status}
                  </div>
                </div>
              )
            })}

          </div>

        </div>

        <div className='col-span-2 cards flex flex-col border rounded-md border-[#464d4f] '>

          <div className='border px-3 border-[#464d4f] flex items-end pb-3 justify-between  h-[4rem]'>
            <p className='text-xl font-semibold tracking-wider '>Recent Activities</p>
          </div>
          <div className='border  border-[#464d4f] border-t-0 rounded-b-md'>
            {/* mapping out the items */}
            {recentProject.map((item, index) => {
              return (
                <div className=' flex mx-3 items-center text-left text-sm p-1 m-3 rounded-md bg-[#252a2f] justify- gap-8'>
                  <p className=' flex gap-2 w-[70%]  overflow-hidden'><img src={item.color} alt="" />{item.name}...</p>
                  <div className=' p-1 flex items-center  gap-2'>
                    {item.status}
                  </div>
                </div>
              )
            })}

          </div>

        </div>

      </div>

    </main>
  )
}

export default Dashboard
