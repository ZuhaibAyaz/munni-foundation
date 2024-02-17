import { VscQuote } from "react-icons/vsc";
import { PiHandHeart } from "react-icons/pi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
import { FaChild } from "react-icons/fa";
import { BsArrowRight} from "react-icons/bs";
import CampaignCard from "@/components/CampaignCard";

const Home = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage:
            "url('https://www.cry.org/wp-content/uploads/Poverty-In-India.png')",
        }}
        className="bg-cover "
      >
        <div className="inset-0 backdrop-brightness-50">
          <div className="container mx-auto">
            <div className="text-light text-white py-12 flex justify-between items-center">
              <div className="flex items-end gap-3">
                <img src="/logo.svg" alt="Ni load hua" className="w-[8%]" />
                <div className="text-sm">Munni Foundation</div>
              </div>
              <div className="flex gap-8 text-sm items-center">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Get Involved</div>
                <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
                  Donate <PiHandHeart className="text-xl" />
                </div>
              </div>
            </div>
            <div className="h-[500px] grid content-center justify-items-start">
              <div className="font-medium text-white text-5xl w-[26%]">
                Children
                &apos;s joy is play
              </div>
              <div className="text-primary mt-4 text-lg w-[26%]">
                OUR MISSION
              </div>
              <div className="text-white mt-4 text-sm w-[26%]">
                to warm a child
                &apos;s heart through coordinated play
              </div>
              <button className="bg-primary px-6 rounded-md mt-8 py-4 font-medium">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: "linear-gradient(90deg,white 55%,#ecd06f 0)",
        }}
      >
        <div className="grid grid-cols-2 container mx-auto">
          <div className="grid place-items-center">
            <div>
              <div className="text-2xl font-medium text-secondary">
                Smile challenge
              </div>
              <div className="text-sm mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias hic quis ab tenetur natus iure sapiente eveniet
                ducimus dolores minus impedit doloribus, obcaecati saepe laborum
                laudantium architecto placeat enim. Reiciendis. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Molestias hic quis
                ab tenetur natus iure sapiente eveniet ducimus dolores minus
                impedit doloribus, obcaecati saepe laborum laudantium architecto
                placeat enim. Reiciendis.
              </div>
            </div>
          </div>
          <div className="text-black grid place-items-center py-16">
            <div className="text-3xl italic w-[52%]">
              <VscQuote className="text-3xl" />
              There is so much joy you can share in this world
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-secondary px-12 py-16 text-white">
          <section className="grid grid-cols-3 xl:mx-auto xl:container">
            <div className="flex items-center justify-center gap-3">
              <PiHandHeart className="text-6xl" />
              <div>
                <div className="text-3xl font-medium">2324+</div>
                <div className="">Donations Recieved</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TbLayoutGridAdd className="text-6xl" />
              <div>
                <div className="text-3xl font-medium">393</div>
                <div className="">Coordination Plays</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaChild className="text-6xl" />
              <div>
                <div className="text-3xl font-medium">2323+</div>
                <div className="">Childrens Helped</div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="container mx-auto py-6">
        <div className="text-2xl font-medium text-secondary flex items-center justify-between">
          Active Fundraisers
          <button className="bg-secondary text-white font-light text-sm py-2 px-4 rounded-full flex items-center gap-2">
            All Campaigns <BsArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {"abc".split("").map((item, index) => {
            return <CampaignCard key={index} index={index} />;
          })}
        </div>
      </section>

      <section className="bg-orange-100 py-8">
        <div className="container mx-auto grid grid-cols-2">
          <div className="grid gap-y-6">
            <div className="font-medium text-4xl w-[20%] leading-tight text-orange-500">
              Support the children
            </div>
            <div className="w-[50%] h-1.5 bg-orange-500"></div>
            <div className="text-sm w-[80%] mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              sint reprehenderit enim quam in totam. Iste blanditiis voluptate
              consequuntur earum quibusdam ipsa corrupti et eveniet repudiandae
              totam consectetur, maxime ex.
            </div>
            <button className="bg-secondary text-white font-medium py-3 px-6 rounded-md w-max">
              Donate Now
            </button>
          </div>
          <div className="grid place-items-center">
            <img
              src="https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg')",
        }}
      >
        <div className="backdrop-brightness-[20%]">
          <div className="container mx-auto py-24 grid place-items-center gap-y-8">
            <div className=" text-white text-3xl">
              Support us to make a difference in society
            </div>
            <div className="flex gap-4">
              <div className="border hover:bg-white cursor-pointer hover:text-black text-white px-4 py-2 rounded-full">
                ₹1,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹2,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹3,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full flex items-center gap-3">
                ₹{" "}
                <input
                  type="text"
                  className="bg-transparent w-max outline-none control"
                  placeholder="Custom amount"
                />
              </div>
            </div>
            <button className="bg-primary text-black text-sm px-8 py-3 rounded-full flex items-center gap-3">
              Donate Tip <PiHandHeart className="text-lg" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-orange-100 py-12 px-10">
        <div className="mx-5 my-4">
      <div className="flex">
       <div className="w-1/2">
        <div className="font-bold text-2xl w-[20%] leading-tight text-black-500">
              Newsletter
            </div>
            <div className="font-light text-1x1 mt-2">
              Fill in your email to subscribe our newsletter.
            </div>
            
            <div class="flex py-4">
            <input 
            type="text" 
            class="w-[60%] rounded-l-md px-4 py-3 placeholder-black bg-gray-200 "
             placeholder="Email"
             />
            <button class="bg-yellow-300 hover:bg-orange-200 text-black font-light rounded-r-md px-4 py-2 text-s">Subscribe</button>
            </div>

            </div>


            <div className="w-1/2 ">
             <div class="flex flex-col float-right space-y-4 ">
        
              <div className="flex justify-between">
                <a href="/"  className="text-sm text-left font-semibold">About Us</a>
              <a href="/" ><FaSquareXTwitter className="size-6"/></a>
              </div>

              <div className="flex justify-between ">
                <a href="/"  className="text-sm text-left font-semibold">Campaigns</a>
                <a href="/" ><IoLogoFacebook className="size-6"/></a>
              </div>

              <div className="flex justify-between  space-x-7">
                <a href="/"  className="text-sm text-left font-semibold">Contact Us</a>
                <a href="/" > <FaLinkedin  className="size-6"/></a>
              </div>
        
       
      </div>
    </div>
</div>

<div className="w-[100%] h-1.5 bg-yellow-300 mt-5"></div>


<div className="flex justify-between mt-6">

  <div className="flex items-center">
  < LuCopyright className="size-5"/>
  <a href="/" className="ml-3 text-sm font-semibold ">Copyright</a>
  </div>
  <div className="flex ">
    <a href="/"  className="text-sm font-semibold">Privacy Policy</a>
    <a href="/"  className="ml-5 text-sm font-semibold ">Terms & Conditions</a>

  </div>

</div>



            </div>
      </section>
    </div>
  );
};

export default Home;
