import React, { Suspense } from "react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Loader from "./Loader";
import Scene from "./Scene";

import "../css/CarCarousel.css";

const CarCarousel = () => {
    return (
        <div className="car-carousel">
            <Canvas>
                <Suspense fallback={<Html><Loader /></Html>}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default CarCarousel;
