import { useGSAP } from "@gsap/react";
import { useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";

const Rings = ({ position }) => {
  // Collect references to each ring mesh
  const ringRefs = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !ringRefs.current.includes(mesh)) {
      ringRefs.current.push(mesh);
    }
  }, []);

  // Load texture
  const texture = useTexture("textures/rings.png");

  // Animate each ring’s rotation
  useGSAP(
    () => {
      if (ringRefs.current.length === 0) return;
      gsap.timeline({ repeat: -1, repeatDelay: 0.5 }).to(
        ringRefs.current.map((r) => r.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: 0.15,
        }
      );
    },
    [position] // Re-run if position changes
  );

  // Position the entire group at once
  return (
    <group position={position} scale={0.5}>
      {Array.from({ length: 4 }, (_, index) => (
        <mesh key={index} ref={getRef}>
          <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

export default Rings;
