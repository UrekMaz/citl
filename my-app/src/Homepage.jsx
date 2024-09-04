import './index.css'
import './Homepage.css'

function Homepage() {

    return (
      <>
      <header className="py-4 pr-5 pl-11 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-8 max-md:flex-col">
        <nav className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-10 items-center self-stretch my-auto text-xl font-semibold text-center text-indigo-900 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch text-3xl font-extrabold text-orange-700 basis-auto">Pitchers</div>
            <a href="#" className="self-stretch my-auto">
              Home
            </a>
            <a href="#" className="self-stretch basis-auto">
              Startup
            </a>
            <a href="#" className="self-stretch my-auto basis-auto">
              Investors
            </a>
            <a href="#" className="self-stretch my-auto">
              About
            </a>
          </div>
        </nav>

        <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-2 text-lg font-extrabold text-center text-indigo-900 max-md:mt-10">
            <button tabIndex="0" className="w-30 h-10 px-4 py-2 bg-indigo-300 bg-opacity-40 rounded-3xl max-md:w-28 max-md:h-16 max-md:px-3">
              Sign In
            </button>
            <button tabIndex="0" className="w-30 h-10 px-4 py-2 bg-indigo-300 bg-opacity-40 rounded-3xl max-md:w-28 max-md:h-16 max-md:px-3">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
   
    <section className="py-1 pl-16 w-full bg-neutral-100 max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <h1 className="self-stretch my-auto text-lg font-regular text-center text-indigo-900 max-md:mt-10 max-md:max-w-full">
            <span className="text-4xl font-bold"> Unlock Your Startup's Potential</span>
            <br />
            <br />
            <span className="text-lg ">Our platform </span>
            <span className="text-lg font-semibold text-green-600">connects </span>
            <span className="text-lg ">
              {' '}
              startups with investors, unlocking funding and growth{' '}
            </span>
            <span className="text-lg font-semibold text-green-600">opportunities </span>
            <span className="text-lg ">.</span>
          </h1>
        </div>

        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb2c0d7f1b174f5df8b4d60717369bd8d460fa9fd646fd5336ebfb7d5dc3cf3b?placeholderIfAbsent=true&apiKey=bf587ccec06c42a682f4f9dae620cfde"
            alt="Illustration representing startups and investors"
            className="object-contain grow w-full aspect-[1.51] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>


    <section className="flex flex-col items-center mt-20  w-full max-w-[1296px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className=" w-full max-w-[1083px] max-md:max-w-full">
        <div className="flex  max-md:flex-col">


    <div className="flex flex-col w-[30%] ml-auto max-md:w-full">
    <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb8b54ec61b57bd98cc27da71fbb5932244c81da82175d73de71163358e7c20?placeholderIfAbsent=true&apiKey=bf587ccec06c42a682f4f9dae620cfde"
    alt="Image of an innovative startup"
    className="object-contain grow w-full aspect-[1.26] max-md:max-w-full"/>
        </div>

          
          <div className="flex flex-col w-[50%] max-md:w-full">
        <div className="flex flex-col grow ml-7 px-8 pt-4 pb-8 mt-8 font-extrabold bg-slate-100 rounded-[20px] max-md:px-4 max-md:mt-6 max-md:max-w-full">

        <div className="self-start px-3 py-2 text-lg font-extrabold text-center text-blue-800 rounded-xl border-blue-800 border-solid bg-neutral-100 border-[2px]">
              Why Invest?
            </div>
      <h2 className="text-lg font-bold text-indigo-900 max-md:max-w-full">
      Discover Innovative Startups
      <br />
      <br />
      <span className="text-base font-medium text-neutral-900">
        Explore their ideas, review their financials, and connect with the founders to find the perfect investment opportunity.
      </span>
      <br />
    </h2>
    <button
      tabIndex="0"
      className="self-center w-20 h-12 px-3 py-2 mt-6 max-w-full text-base font-extrabold text-center text-white bg-orange-400 rounded-xl w-[250px] max-md:mt-8" >
      Become an Investor
    </button>
   </div>
    </div>
        </div>
      </div>
    </section>

    
    <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">

      <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[45%] max-md:w-full">
  <div className="flex flex-col grow ml-7 px-8 pt-4 pb-8 mt-8 font-extrabold bg-slate-100 rounded-[20px] max-md:px-4 max-md:mt-6 max-md:max-w-full">
    
    <div className="self-start px-3 py-2 text-lg text-center text-blue-800 rounded-xl border-blue-800 border-solid bg-neutral-100 border-[2px]">
      Why Pitch?
    </div>
    <h3 className="text-lg font-bold text-indigo-900 max-md:max-w-full">
      Secure Funding for Your Startup
      <br />
      <br />
      <span className="text-base font-medium text-neutral-900">
        Pitch your innovative idea, showcase your business plan, and unlock the funding you need to turn your vision into reality.
      </span>
      <br />
    </h3>
    <button
      tabIndex="0"
      className="self-center w-20 h-12 px-3 py-2 mt-6 max-w-full text-base font-extrabold text-center text-white bg-orange-400 rounded-xl w-[250px] max-md:mt-8">
      Pitch your idea
    </button>
  </div>
</div>



        <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0a270c97bfc1b086ea9216bdec81cb977bb9f59c3ca75a82796509c68a81431?placeholderIfAbsent=true&apiKey=bf587ccec06c42a682f4f9dae620cfde"
            alt="Image representing pitching your idea"
            className="object-contain grow w-full aspect-[1.28] max-md:max-w-full"
          />
        </div>

      </div>
    </section>

    <section>
    <h2 className="feature-text">A Seamless Journey for Startups and Investors</h2>
    </section>

      </>
    )
  }
  
  export default Homepage
  
