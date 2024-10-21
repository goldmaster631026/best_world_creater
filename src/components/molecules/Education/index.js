import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              WEB3 DEVELOPER
              </h3>
              <p className="text-sm text-neutral font-semibold">2021 - 2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            Architected and deployed a suite of smart contracts for a leading 
DApp on Ethereum, which secured over $5 milion in digital assets 
within the frst three months post-launch.
• Optimized contract code for gas efficiency, achieving a 40% 
reduction in transaction costs for users during peak network 
congestion times.
• Played a pivotal ole in the development of 2 DAO's governance 
model, resulting in a 150% increase in community engagement 
and a 200% growth in token holders within six months.
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              BLOCKCHAIN ENGINEER
              </h3>
              <p className="text-sm text-neutral font-semibold">2017 - 2021</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            Engineered a robust API infrastructure for a high-profile NET 
marketplace, facilitating the seamless exchange of over 96,000 
NFTS and driving a monthly transaction volume, increase of 50%.
• Implemented comprehensive smart contract audits and security 
measures that led to the platform's recognition as one of the 
most secure in the industry, with zero breaches or exploits 
reported.
• Collaborated with cross-functional teams to integrate 
bblockchain technology into traditional web applications, which 
expanded the company’s service offerings and resulted in a 50% 
increase in 828 partnerships.
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">Full Stack</h3>
              <p className="text-sm text-neutral font-semibold">2014 - 2017</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have passed the Senior Secondary Certificate (SSC) with the
              highest result <b>GPA - 88</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
