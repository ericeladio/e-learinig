import Image from "next/image";
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
      <div>
        <img src='zapier.svg' />
        <img src='spotify.svg' />
        <img src='zoom.svg' />
        <img src='amazon.svg' />
        <img src='adobe.svg' />
        <img src='notion.svg' />
        <img src='netflix.svg' />
      </div>
      <img src='video' />
      <section>
        <div>
          <div>
            <h3>Benefits</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button>View All</button>
        </div>
        <div>
          <h4>01</h4>
          <span>Flexible Learning Schedule</span>
          <p>Fit your coursework around your existing commitments and obligations.</p>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>Our Courses</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button>View All</button>
        </div>
        <div>
          <img src='working.png' />
          <div>
            <div>
              <span>4 Weeks</span>
              <span>Beginner</span>
            </div>
            <span>By Jhon Smith</span>
          </div>
          <h3>Web Design Fundamentals</h3>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
          </p>
          <button>Get it Now</button>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>Our Pricing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div>
            <button>Monthly</button>
            <button>Yearly</button>
          </div>
        </div>
        <div>
          <div>
            <span>Free plan</span>
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
      </section>
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
