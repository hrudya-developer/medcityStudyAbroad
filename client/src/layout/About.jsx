import about_img from '../assets/about_us_img.png';
import { GraduationCap, UsersRound, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 py-10">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2">

        <h1 className="text-sm font-bold mb-4 text-primary animate__animated animate__fadeInLeftBig">
          ABOUT US
          <span className="flex items-center gap-1 mt-2 animate__animated animate__fadeInLeftBig">
            <span className="w-4 h-[3px] bg-primary"></span>
            <span className="w-16 h-[3px] bg-gray-300"></span>
          </span>
        </h1>

        <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-1 animate__animated animate__fadeInLeftBig">
          EMPOWERING DREAMS
        </h1>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary animate__animated animate__fadeInLeftBig">
          BUILDING GLOBAL FUTURES
        </h1>

        <p className="text-xs md:text-sm lg:text-md pt-2 animate__animated animate__fadeInLeftBig">
          At Medcity International, we believe education is the key to a boundless future. For over a decade, we've been dedicated to helping students explore global opportunities and achieve their academic and career aspirations.
        </p>
      <p className="text-xs md:text-sm lg:text-md pt-2 animate__animated animate__fadeInLeftBig">
       

Our experienced counselors provide personalized guidance tailored to each student's goals, ensuring a smooth and confident journey toward international education.

With strong partnerships across top universities worldwide, we open doors to quality education, scholarships, and career-enhancing opportunities.
        </p>

        {/* STATS */}
      <div className="grid grid-cols-3 gap-4 bg-secondary shadow-sm rounded-md rounded-tr-[100px] px-4 py-4 mt-8 text-center">

  <div className="flex flex-col items-center gap-1 sm:border-r sm:border-gray-300 sm:pr-4">
    <GraduationCap className="text-primary size-6 sm:size-8 md:size-10" />
    <h1 className="text-sm sm:text-md md:text-lg font-bold text-white">500+</h1>
    <h1 className="text-sm text-white">Universities</h1>
  </div>

  <div className="flex flex-col items-center gap-1 sm:border-r sm:border-gray-300 sm:pr-4">
    <UsersRound className="text-primary size-6 sm:size-8 md:size-10" />
    <h1 className="text-sm sm:text-md md:text-lg font-bold text-white">50K+</h1>
    <h1 className="text-sm text-white">Students</h1>
  </div>

  <div className="flex flex-col items-center gap-1">
    <Globe className="text-primary size-6 sm:size-8 md:size-10" />
    <h1 className="text-sm sm:text-md md:text-lg font-bold text-white">30+</h1>
    <h1 className="text-sm text-white">Countries</h1>
  </div>

</div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2">
        <img
          src={about_img}
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

    </div>
  );
};

export default About;