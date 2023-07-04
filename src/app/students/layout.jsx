import Courses from "./Courses"
import { EB_Garamond } from 'next/font/google'


const gar = EB_Garamond({ 
  subsets: ['latin'],
  weight: ['400'] 
})

export const metadata = {
    title: 'Students in Univelcity',
    description: 'Different students\'s category',
  }

export default function layout({children}) {
  return (
    <div className={gar.className}>
    <div>
  {children}
  <Courses/>
        </div>
        </div>

  )
}