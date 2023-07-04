import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { EB_Garamond } from 'next/font/google'


const gar = EB_Garamond({ 
  subsets: ['latin'],
  weight: ['400'] 
})

export const metadata = {
  title: 'Learning Next JS',
  description: 'Understanding the principles of next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gar.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
