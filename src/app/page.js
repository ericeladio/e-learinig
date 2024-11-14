import Image from "next/image";
import { CustomSection } from "@/components/CustomSection";
export default function Home() {
  return (
    <div >
      <div className="flex flex-col items-center mt-20">
        <div className="flex items-center">
          <Image src="thunder.svg" width={50} height={50} alt="logo-thunder" />
          <h1 className="text-orangeShade-50 text-5xl">
            Unlock Your
            <span className="text-absoluteWhite">
              Full Potential
            </span>
          </h1>
        </div>
        <span className="text-2xl mt-5">
          with Online Design and Development Courses.
        </span>
        <span className="text-sm mb-5">
          Learn from Industry Experts and Enhance Your Skills.
        </span>
        <div className="flex justify-between w-[300px] ">
          <button className="bg-orangeShade-50 text-absoluteWhite rounded-sm px-2 py-1">Explore Coruses</button>
          <button className="bg-absoluteWhite text-absoluteBlack rounded-sm px-2 py-1">View Princing</button>
        </div>
      </div>
      <div className="flex justify-between w-10/12 mx-auto my-40">
        <img src='zapier.svg' />
        <img src='spotify.svg' />
        <img src='zoom.svg' />
        <img src='amazon.svg' />
        <img src='adobe.svg' />
        <img src='notion.svg' />
        <img src='netflix.svg' />
      </div>
      <img src='./video Place holder.png' />
      <CustomSection
        title='Benefits'
        description='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
      >
        <div className="border  rounded-sm w-[250px] h-[200px] p-4">
          <h4 className="text-3xl text-right font-bold">01</h4>
          <span className="text-1xl font-bold">Flexible Learning Schedule</span>
          <p className="text-sm mt-1 ">Fit your coursework around your existing commitments and obligations.</p>
        </div>
        <div className="border  rounded-sm w-[250px] h-[200px] p-4">
          <h4 className="text-3xl text-right font-bold">01</h4>
          <span className="text-1xl font-bold">Flexible Learning Schedule</span>
          <p className="text-sm mt-1 ">Fit your coursework around your existing commitments and obligations.</p>
        </div>
        <div className="border  rounded-sm w-[250px] h-[200px] p-4">
          <h4 className="text-3xl text-right font-bold">01</h4>
          <span className="text-1xl font-bold">Flexible Learning Schedule</span>
          <p className="text-sm mt-1 ">Fit your coursework around your existing commitments and obligations.</p>
        </div>
        <div className="border  rounded-sm w-[250px] h-[200px] p-4">
          <h4 className="text-3xl text-right font-bold">01</h4>
          <span className="text-1xl font-bold">Flexible Learning Schedule</span>
          <p className="text-sm mt-1 ">Fit your coursework around your existing commitments and obligations.</p>
        </div>

      </CustomSection>
      <CustomSection
        title='Our Courses'
        description='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
      >
        <div className="border  rounded-sm w-[450px] h-[470px] p-4">
          <img src='working.png' />
          <div className="flex justify-between mt-2">
            <div className="flex gap-x-6">
              <span className="border  rounded-sm px-2">4 Weeks</span>
              <span className="border  rounded-sm px-2">Beginner</span>
            </div>
            <span className="text-sm" >By Jhon Smith</span>
          </div>
          <h3 className="text-1xl font-bold my-3">Web Design Fundamentals</h3>
          <p className="text-sm">
            Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
          </p>
          <button className="bg-gray-200 w-full py-2 rounded-sm mt-4 text-black">Get it Now</button>
        </div>
      </CustomSection>
      <CustomSection
        title='Our Testimonials'
        description='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
      >
        <div className="border  rounded-sm w-[450px] h-[150px] p-4">
          <p className="text-sm">The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
          <div className="flex justify-between items-center mt-3">
          <div className="flex gap-x-4  items-center ">
            <img  width={40} height={40} src='person.png' />
            <span className="text-sm font-bold">Sara L</span>
          </div>
          <button className="bg-gray-200 text-sm text-absoluteBlack rounded-sm px-2 h-[30px]">Read full story</button>
          </div>
        </div>
        <div className="border  rounded-sm w-[450px] h-[150px] p-4">
          <p className="text-sm">The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
          <div className="flex justify-between items-center mt-3">
          <div className="flex gap-x-4  items-center ">
            <img  width={40} height={40} src='person.png' />
            <span className="text-sm font-bold">Sara L</span>
          </div>
          <button className="bg-gray-200 text-sm text-absoluteBlack rounded-sm px-2 h-[30px]">Read full story</button>
          </div>
        </div>
        <div className="border  rounded-sm w-[450px] h-[150px] p-4">
          <p className="text-sm">The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
          <div className="flex justify-between items-center mt-3">
          <div className="flex gap-x-4  items-center ">
            <img  width={40} height={40} src='person.png' />
            <span className="text-sm font-bold">Sara L</span>
          </div>
          <button className="bg-gray-200 text-sm text-absoluteBlack rounded-sm px-2 h-[30px]">Read full story</button>
          </div>
        </div>
      </CustomSection>
      <CustomSection
        title='Our Pricing'
        description='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
        isPricning
      >
        <div>
          <div className="bg-gray-50 border  rounded-md">
            <span className="bg-orange-200 bordeer border-orange-400">Free plan</span>
            <h3>
              $0
              <span>/month</span>
            </h3>
            <div>
              <span>Available Features</span>
              <ul>
                <li>
                  <img src='check.svg' />
                  <span>Access to selected free courses.</span>
                </li>
                <li>
                  <img src='check.svg' />
                  <span>Limited course materials and resources.</span>
                </li>
                <li>
                  <img src='check.svg' />
                  <span>Basic community support.</span>
                </li>
                <li>
                  <img src='check.svg' />
                  <span>No certification upon completion.</span>
                </li>
                <li>
                  <img src='check.svg' />
                  <span>Ad-supported platform.</span>
                </li>
                <li>
                  <img src='unCheck.svg' />
                  <span>Access to exclusive Pro Plan community forums.</span>
                </li>
                <li>
                  <img src='unCheck.svg' />
                  <span>Early access to new courses and updates.</span>
                </li>
              </ul>
              <button>Get Started</button>
            </div>
          </div>
        </div>

      </CustomSection>
      <section>
        <div>
          <h3>Frequently Asked Questions</h3>
          <p>
            Still you have any questions? Contact our Team via support@skillbridge.com
          </p>
          <button>See All FAQ’s</button>
        </div>
      </section>
    </div>
  );
}
