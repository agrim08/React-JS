import { useState } from "react";

const sectionData = [
  {
    title: "About",
    discription: "We are a leading food delivery company in the region.",
    value: "about",
  },
  {
    title: "Grocery",
    discription: "Daily Home Needs 😉",
    value: "grocery",
  },
  {
    title: "Career",
    discription: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
    value: "career",
  },
];

const Section = ({ title, discription, isVisible, setIsVisible, value }) => {
  return (
    <div className="border border-black p-2 m-5 ">
      <h1 className="text-orange-500 text-3xl font-bold p-2 m-2">{title}</h1>
      {isVisible ? (
        <>
          <button
            className="border border-black cursor-pointer m-5 rounded-md h-8 w-[8rem] hover:bg-violet-200 "
            onClick={(e) => {
              setIsVisible("");
            }}
          >
            Hide
          </button>
          <p className="p-2 m-2 text-black">{discription}</p>
        </>
      ) : (
        <button
          className="border border-black cursor-pointer m-5 rounded-md h-8 w-[8rem] hover:bg-violet-200 "
          onClick={() => {
            setIsVisible(value);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  console.log(visibleSection);

  return (
    <div className="shadow-purple-300">
      <h1 className="text-orange-500 text-4xl font-extrabold mt-3 m-3 ml-5">
        InstaMart
      </h1>
      {sectionData.map((section) => (
        <Section
          key={section.value}
          title={section.title}
          discription={section.discription}
          isVisible={visibleSection === section.value}
          setIsVisible={(val) => setVisibleSection(val)}
          value={section.value}
        />
      ))}
    </div>
  );
};

export default Instamart;
