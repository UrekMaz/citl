import './index.css';
import './Homepage.css';
import bImage from './img/b.png';
import manImage from './img/man.png';
import thumbImage from './img/bottom.png';

function Homepage() {
  return (
    <>
      <header className="py-4 pr-5 pl-11 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-8 items-center max-md:flex-col">
          <nav className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-10 items-center text-xl font-semibold text-indigo-900 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-extrabold text-orange-700">Pitchers</div>
              <a href="#" className="my-auto">Home</a>
              <a href="#" className="my-auto">Startup</a>
              <a href="#" className="my-auto">Investors</a>
              <a href="#" className="my-auto">About</a>
            </div>
          </nav>

          <div className="ml-auto flex gap-4 max-md:ml-0 max-md:mt-4">
            <button
              tabIndex="0"
              className="px-6 py-2 text-white font-bold bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Sign In
            </button>
            <button
              tabIndex="0"
              className="px-6 py-2 text-white font-bold bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </div>
        </div>
      </header>

      {/* Updated Section Styling */}
      <section className="py-16 pl-16 w-full bg-neutral-100 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="max-h-[350px]"> {/* Added height constraint */}
              <h1 className="text-2xl font-regular text-indigo-900 max-md:mt-10">
                <span className="block text-6xl font-bold text-indigo-900 mb-4">
                  Unlock Your Startup's Potential
                </span>
                <br />
                <span className="text-2xl font-semibold text-indigo-700">
                  Our platform{' '}
                </span>
                <span className="text-2xl font-semibold text-green-600">
                  connects{' '}
                </span>
                <span className="text-2xl font-semibold text-indigo-700">
                  startups with investors, unlocking funding and growth{' '}
                </span>
                <span className="text-2xl font-semibold text-green-600">
                  opportunities
                </span>
                <span className="text-2xl font-semibold text-indigo-700">.</span>
              </h1>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Whether you're looking to raise capital or make a meaningful investment, 
                our platform bridges the gap between innovators and investors.
              </p>
              <button
                tabIndex="0"
                className="mt-8 w-[250px] py-3 text-base font-extrabold text-center text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col ml-auto w-3/5 max-md:ml-0 max-md:w-full">
            {/* Shifted image towards the right */}
            <img
              loading="lazy"
              src={thumbImage}
              alt="Illustration representing startups and investors"
              className="w-[70%] h-full object-cover ml-auto"  // Added ml-auto to move it right
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full h-full max-w-[1200px] mx-auto">
          <div className="flex w-full h-full lg:w-[80%] justify-right lg:justify-end">
            <img loading="lazy" src={manImage} className="object-contain" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col px-7 py-8 font-extrabold bg-slate-200 shadow-lg rounded-[20px] relative">
              <div className="self-start px-5 py-2 text-lg font-extrabold text-center text-blue-800 rounded-xl border-blue-800 border-solid bg-neutral-100 border-[2px]">
                Why Invest?
              </div>
              <h2 className="text-xl font-bold pt-4 text-indigo-900">
                Discover Innovative Startups
                <br />
                <br />
                <span className="text-lg font-medium text-gray-700">
                  Explore their ideas, review their financials, and connect with the
                  founders to find the perfect investment opportunity.
                </span>
              </h2>
              <button
                tabIndex="0"
                className="self-center mt-6 w-[250px] h-12 text-base font-extrabold text-center text-white bg-orange-400 rounded-xl hover:bg-orange-500 transition-all duration-300"
              >
                Become an Investor
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full h-full max-w-[1400px] mx-auto">
          <div className="flex flex-col w-[45%] max-md:w-full">
            <div className="flex flex-col grow font-extrabold bg-slate-100 p-8 rounded-lg shadow-lg">
              <div className="self-start px-5 py-2 text-lg text-center text-blue-800 rounded-xl border-blue-800 border-solid bg-neutral-100 border-[2px]">
                Why Pitch?
              </div>
              <h2 className="text-xl font-bold pt-4 text-indigo-900">
                Secure Funding for Your Startup
                <br />
                <br />
                <span className="text-lg font-medium text-gray-700">
                  Pitch your innovative idea, showcase your business plan, and unlock the funding you need to turn your vision into reality.
                </span>
              </h2>
              <button
                tabIndex="0"
                className="self-center mt-6 w-[250px] h-12 text-base font-extrabold text-center text-white bg-orange-400 rounded-xl hover:bg-orange-500 transition-all duration-300"
              >
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

      {/* Updated the image to extend width and add bottom margin */}
      <section className="pb-20 pt-10">
        <img
          loading="lazy"
          src={bImage}
          alt="Image representing pitching your idea"
          className="object-contain grow container max-w-screen-lg mx-auto w-[80%] aspect-[1.28] max-md:max-w-full"
        />
      </section>
    </>
  );
}

export default Homepage;
