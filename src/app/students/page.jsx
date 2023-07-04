import Image from "next/image";
import pic from '../images/students.png'

export default function page() {
  return (
    <div>
      <h2>Student's page</h2>
        <Image src={pic} alt="students learning" width={500} height={400}/>

      {/* <Image src='/men.jpg' alt="students learning" width={500} height={400}/> */}
    </div>
  )
}
