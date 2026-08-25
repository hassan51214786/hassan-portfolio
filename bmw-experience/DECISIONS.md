# Architectural Decisions

### React Three Fiber vs Vanilla Three.js
While vanilla Three.js offers total control, building this in a React portfolio without R3F would require writing hundreds of lines of boilerplate just to handle window resizing, canvas mounting, and primitive declarations. R3F allows us to compose the low-poly car procedurally using JSX (nesting `<mesh>` inside `<group>`), which is far more readable and maintainable.

### GSAP ScrollTrigger vs Hand-Rolled Math
Hand-rolling scroll math with `window.scrollY` and linear interpolation (`lerp`) works for simple things, but orchestrating a 6-stage sequence where the camera orbits, the hood opens, the camera pushes in, and the body fades out would result in a nightmare of nested `if/else` statements. GSAP `ScrollTrigger` allows us to define a single timeline where animations fire sequentially or concurrently based on specific scroll percentages. It is the industry standard for these types of high-end product pages.

### Procedural Geometry vs `.gltf`
To ensure the project is truly self-contained and avoids reliance on massive external binary assets, the car is built using a composition of basic Three.js primitives (`boxGeometry`, `cylinderGeometry`, `torusGeometry`). By grouping them logically (Chassis, Hood Pivot, Interior, Engine), we can animate their sub-components individually (like the hood swinging open on a hinge). 

### Transition Implementations
1. **Hood Opening**: The hood mesh is not rotated on its center. Instead, it is nested in a `<group>` positioned near the windshield. GSAP targets the group's rotation, creating a physical hinge effect.
2. **Body Fade (Interior Reveal)**: Instead of snapping the camera through the roof, the camera interpolates slowly. Simultaneously, the exterior `MeshPhysicalMaterial` is targeted by GSAP to transition its `opacity` down to `0.15` (with `transparent={true}`), revealing the dashboard and seats inside smoothly.
