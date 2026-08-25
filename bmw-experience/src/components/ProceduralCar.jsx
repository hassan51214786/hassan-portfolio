import React, { forwardRef } from 'react';
import * as THREE from 'three';

const ProceduralCar = forwardRef(({ carColor, wheelType }, ref) => {
  const { carGroupRef, hoodRef, exteriorMaterialRef } = ref;

  return (
    <group ref={carGroupRef} position={[0, -0.5, 0]}>
      
      {/* 
        1. MAIN CHASSIS (Body)
        A stylized low-poly shape using a combination of boxes and extrusions.
        For simplicity, we'll compose it using grouped primitives that form a car shape.
      */}
      <group>
        {/* Lower body */}
        <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 0.6, 5]} />
          <meshPhysicalMaterial 
            ref={exteriorMaterialRef}
            color={carColor}
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent={true}
          />
        </mesh>
        
        {/* Cabin (Roof/Glass) */}
        <mesh position={[0, 1.25, -0.2]} castShadow>
          <boxGeometry args={[1.8, 0.7, 2.4]} />
          <meshPhysicalMaterial 
            color="#050505"
            metalness={1}
            roughness={0}
            transmission={0.9}
            ior={1.5}
            thickness={0.5}
            transparent={true}
          />
        </mesh>

        {/* 
          2. HOOD & ENGINE
          The hood pivots from the back (z = 0.8) so it opens upwards.
        */}
        <group position={[0, 0.9, 1.3]} ref={hoodRef}>
          {/* Offset the mesh so it pivots from the hinge */}
          <mesh position={[0, 0, 0.6]} castShadow receiveShadow>
            <boxGeometry args={[1.96, 0.1, 1.2]} />
            <meshPhysicalMaterial 
              color={carColor}
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
            />
          </mesh>
        </group>

        {/* Engine Block (Visible when hood is open) */}
        <group position={[0, 0.7, 1.8]}>
          <mesh>
            <boxGeometry args={[1.2, 0.4, 0.8]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.4} />
          </mesh>
          {/* Cylinders */}
          {[-0.4, 0, 0.4].map((x, i) => (
            <mesh key={i} position={[x, 0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
              <meshStandardMaterial color="#888888" metalness={1} roughness={0.2} />
            </mesh>
          ))}
          {/* M-Power Badge accent */}
          <mesh position={[0, 0.25, 0.3]}>
            <boxGeometry args={[0.6, 0.05, 0.2]} />
            <meshStandardMaterial color="#0066ff" />
          </mesh>
        </group>

        {/* 
          3. INTERIOR
          Detailed cabin that becomes visible when exterior fades.
        */}
        <group position={[0, 0.6, -0.2]}>
          {/* Dashboard */}
          <mesh position={[0, 0.4, 0.8]}>
            <boxGeometry args={[1.7, 0.3, 0.4]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
          </mesh>
          {/* Steering Wheel */}
          <mesh position={[0.4, 0.5, 0.6]} rotation={[Math.PI / 8, 0, 0]}>
            <torusGeometry args={[0.2, 0.04, 16, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>
          {/* Infotainment Screen */}
          <mesh position={[0, 0.6, 0.65]} rotation={[-Math.PI / 12, 0, 0]}>
            <boxGeometry args={[0.5, 0.3, 0.05]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          {/* Seats */}
          {[-0.4, 0.4].map((x, i) => (
            <group key={i} position={[x, 0.2, 0]}>
              {/* Bottom */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.5, 0.2, 0.6]} />
                <meshStandardMaterial color="#4a0404" roughness={0.9} /> {/* Merino Red Leather */}
              </mesh>
              {/* Backrest */}
              <mesh position={[0, 0.4, -0.25]} rotation={[Math.PI / 12, 0, 0]}>
                <boxGeometry args={[0.5, 0.8, 0.2]} />
                <meshStandardMaterial color="#4a0404" roughness={0.9} />
              </mesh>
            </group>
          ))}
        </group>

        {/* 
          4. WHEELS
        */}
        {[
          [-1.05, 0.3, 1.8],  // Front Left
          [1.05, 0.3, 1.8],   // Front Right
          [-1.05, 0.3, -1.6], // Rear Left
          [1.05, 0.3, -1.6]   // Rear Right
        ].map((pos, i) => (
          <group key={i} position={pos}>
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
              <meshStandardMaterial color="#111" roughness={0.9} />
            </mesh>
            {/* Rims based on wheelType state */}
            {wheelType === 'sport' ? (
              <mesh rotation={[0, 0, Math.PI / 2]} scale={1.01}>
                <cylinderGeometry args={[0.25, 0.25, 0.22, 5]} />
                <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.2} />
              </mesh>
            ) : (
              <mesh rotation={[0, 0, Math.PI / 2]} scale={1.01}>
                <cylinderGeometry args={[0.25, 0.25, 0.22, 12]} />
                <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} />
              </mesh>
            )}
          </group>
        ))}

        {/* Headlights */}
        <mesh position={[-0.7, 0.7, 2.51]}>
          <boxGeometry args={[0.4, 0.1, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.7, 0.7, 2.51]}>
          <boxGeometry args={[0.4, 0.1, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        {/* Grille */}
        <mesh position={[0, 0.6, 2.51]}>
          <boxGeometry args={[0.6, 0.3, 0.05]} />
          <meshStandardMaterial color="#050505" />
        </mesh>
      </group>
    </group>
  );
});

ProceduralCar.displayName = 'ProceduralCar';
export default ProceduralCar;
