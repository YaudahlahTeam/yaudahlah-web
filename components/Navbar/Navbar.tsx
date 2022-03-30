import NextLink from 'next/link'
import { useState } from 'react'
const Navbar = () => {
  const dataNavbar = [
    {
      "link": "/",
      "name": "home",
    },
  ]
  const [menu,setMenu] = useState(false)
  return (
    <div>
      <div className=" w-screen  h-[60px] fixed z-90 bg-white flex justify-center z-top" >
        <div className="max-width-component w-full ">
          <div className="w-full flex justify-between h-full items-center  ">
            <NextLink  href={'/'} passHref>
                <a className="h-full flex items-center font-xl font-light px-4 ">
                  Yaudahlah Team
                </a>
            </NextLink>
            {/* Mobile navbar */}
            <div className="h-[100%] flex gap-6 flex">
              {
                dataNavbar.map((data,idx)=> {
                  return (
                    <NextLink  href={data.link} passHref key={idx}>
                      <a className=" w-[70px] h-[100%]  flex items-center justify-center hover:bg-blue-400 hover:text-white  font-light">{data.name}</a>
                    </NextLink>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;