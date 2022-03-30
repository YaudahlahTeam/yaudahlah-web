import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageContainer from '../components/PageContainer'
import {dataMembers} from '../data/members'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {AiFillGithub,AiFillLinkedin,AiFillFileText} from 'react-icons/ai'
const Home: NextPage = () => {
  const router = useRouter()
  return (
    <PageContainer>
      <Head >
        <meta
          name="keywords"
          content="yaudahlah, yaudah lah, yaudahlah team"
          title="Yaudahlah Team"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div className="flex flex-col items-center z-0 md:mx-2 ">
        <div className="pt-[80px] min-h-screen mx-10 max-width-component w-full px-4">
          <div className="text-5xl font-medium underline">
            <p>#Yaudahlah Team</p>
          </div>
          <div className="mt-2 ">
            
            <p className=" mt-4 max-w-[600px] ">
              Yaudahlah Team merupakan sekumpulan anak gabut yang haus akan sebuah pengetahuan dari <span className="font-bold">Telkom University</span>. Kami semua sedang belajar terkait <span className="font-bold">Backend Engineer, Frontend Engineer , Data Engineer, Data Science, AI Engineer, DevOps, etc.</span>
            </p>
          </div>
          <div className="text-3xl font-medium underline mt-10">
            <p>Members</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-4 grid-cols-2 ">
            {
              dataMembers?.map((member,idx) =>{
                return (
                  <div  key={idx} className="w-full h-[150px] border-2 rounded-md border-dashed border-black p-[10px] shadow-md">
                    <div className="h-[60px] ">
                      <p className="font-bold">
                        {member.nama}
                      </p> 
                    </div>
                    <div className="flex flex-col h-1/2 gap-2">
                      <NextLink  href={member.github} passHref>
                        <a className="underline">#SeeGithub</a>
                      </NextLink>
                      <NextLink  href={member.linkedin} passHref>
                        <a className="underline">#SeeLinkedin</a>
                      </NextLink>
                    </div>
                  </div>
                )
              })
            }
          </div>
          
        </div>
        <div className={"text-sm  w-full text-center mb-4"}>
            @2022 Yaudahlah Team, All Right Reserved.
        </div>
      </div>
      
    </PageContainer>
  )
}

export default Home
