import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import HeroPc from "../components/HeroPc";
import HeroBtn from "../components/HeroBtn";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div className="sm:text-6xl text-4xl font-thin text-white text-center font-outfit">
          <h1 className="">
            innovative<span className="font-black"> designer</span>
          </h1>
          <h1 className="font-black">
            adaptive<span className="font-thin"> developer</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HeroPc
                //   scale={0.07}
                //   position={[0, 0, 0]}
                //   rotation={[0, 280, 0]}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 q-full z-10 c-space">
        <p className="text-white text-center mb-10 text-2xl">
          Hi, I&apos;m Zaharan Niyas <span className="waving-hand">👋</span>
        </p>
        <a href="#about" className="">
          <HeroBtn title="Let's Create" containerClass="sm:w-fit w-full " />
        </a>
      </div>
    </section>
  );
};

export default Hero;
