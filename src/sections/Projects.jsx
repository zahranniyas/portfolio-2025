import { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Phone from "../components/Phone";
import Computer from "../components/Computer";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];

  const handleNav = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="projects">
      <h1 className="head-text">Selected Projects</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <h2 className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </h2>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt="tag.name" />
                </div>
              ))}
            </div>
            <div className="flex gap-5">
              {currentProject.github !== "" ? (
                <div className="text-white-600 flex items-center gap-2 hover:text-white transition-all">
                  <img
                    src="/assets/github.svg"
                    alt="github-logo"
                    className="w-5"
                  />
                  <a
                    href={currentProject.github}
                    target="_blank"
                    className="border-b-[1px] border-white-700 cursor-pointer"
                  >
                    GitHub
                  </a>
                </div>
              ) : (
                ""
              )}
              {currentProject.behance !== "" ? (
                <div className="text-white-600 flex items-center gap-2 hover:text-white transition-all">
                  <img
                    src="/assets/behance-logo.jpg"
                    alt="behance-logo"
                    className="w-5"
                  />
                  <a
                    href={currentProject.behance}
                    target="_blank"
                    className="border-b-[1px] border-white-700 cursor-pointer"
                  >
                    Behance
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
            {currentProject.href !== "" ? (
              <a
                href={currentProject.href}
                target="_blank"
                className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
              >
                <p>Check Live Site</p>
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="w-3 h-3"
                />
              </a>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNav("previous")}>
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
            <button className="arrow-btn" onClick={() => handleNav("next")}>
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-primary rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                {selectedProjectIndex === 2 || selectedProjectIndex === 5 ? (
                  <group
                    scale={3}
                    position={[-0.5, -4.5, 0]}
                    rotation={[0, -0, 1, 0]}
                  >
                    <Phone texture={currentProject.texture} />
                  </group>
                ) : (
                  <group
                    scale={1.7}
                    position={[-0.5, -2.5, 0]}
                    rotation={[0, -0, 1, 0]}
                  >
                    <Computer texture={currentProject.texture} />
                  </group>
                )}
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
