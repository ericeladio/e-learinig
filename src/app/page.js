import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <span>
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </span>
      <nav>
        <ul>
          <li>Logo</li>
          <li>Home</li>
          <li>Courses</li>
          <li>About Us</li>
          <li>Princing</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Sing Up</li>
          <li>Login</li>
        </ul>
      </nav>
      <div>
        <img src="thunder.svg" />
        <h1>Unlock Your Creative Potential</h1>
        <span>
          with Online Design and Development Courses.
        </span>
        <span>
          Learn from Industry Experts and Enhance Your Skills.
        </span>
        <div>
          <button>Explore Coruses</button>
          <button>View Princing</button>
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
