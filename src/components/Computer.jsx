import { useEffect, useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Computer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/mac05-ed.glb");

  const txt = useVideoTexture("/textures/project/project1-2.mp4");

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);

  return (
    <group {...props} dispose={null} ref={group}>
      <group
        position={[0.166, 0.676, -0.057]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials.SVGMat}
          position={[-24.618, 55.668, -90.094]}
          scale={153.618}
        />
        <group rotation={[-Math.PI, 0, 0]}>
          <group
            position={[0, -45.502, 311.501]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[228.908, 333.167, 100]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Logos_0.geometry}
              material={materials.Logos}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_OnOffButton_0.geometry}
              material={materials.OnOffButton}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_PCBody_0.geometry}
              material={materials.PCBody}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_PortWires_0.geometry}
              material={materials.PortWires}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_ScreenOff_0.geometry}
              material={materials.ScreenOff}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Side_0.geometry}
              material={materials.Side}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.screen.geometry}
              material={materials.Screen}
            >
              <meshBasicMaterial map={txt} toneMapped={false} />
            </mesh>
          </group>
          <group
            position={[-55.589, -318.037, -4.361]}
            rotation={[0.001, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_KeyboardKeys_0.geometry}
              material={materials.KeyboardKeys}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_KeyboardLine_0.geometry}
              material={materials.KeyboardLine}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_Logos_0.geometry}
              material={materials.Logos}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_OnOff_0.geometry}
              material={materials.OnOff}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_PCBody_0.geometry}
              material={materials.PCBody}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_PortWires_0.geometry}
              material={materials.PortWires}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_Side001_0.geometry}
              material={materials["Side.001"]}
            />
          </group>
          <group
            position={[247.424, -309.145, -8.034]}
            rotation={[Math.PI / 2, 1.571, 0]}
            scale={[66.768, 66.769, 66.769]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_Logos_0.geometry}
              material={materials.Logos}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_MouseTop_0.geometry}
              material={materials.MouseTop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_OnOff_0.geometry}
              material={materials.OnOff}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_PCBody_0.geometry}
              material={materials.PCBody}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_PortWires_0.geometry}
              material={materials.PortWires}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mouse_Side001_0.geometry}
              material={materials["Side.001"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stand_PCBody_0.geometry}
            material={materials.PCBody}
            position={[0, -49.879, -2.941]}
            rotation={[0.096, 0, -Math.PI / 2]}
            scale={100}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        position={[0.213, 0.515, 0.554]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.513, -0.128, -1.19]}
      />
    </group>
  );
};

useGLTF.preload("/models/mac05-ed.glb");

export default Computer;
