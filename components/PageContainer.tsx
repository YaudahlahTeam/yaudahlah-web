import Navbar from "../components/Navbar/Navbar"
import {FC} from 'react'

const PageContainer: FC = ({ children,...props}) => {

  return (
    <div>
      <div className="">
        <Navbar/>
        {children}
      </div>
    </div>
    
  )
}

export default PageContainer;