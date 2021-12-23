import React, { useRef, useState, useEffect } from "react";
import { Environment, ContactShadows, Billboard, Text } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

import AstonMartinDB11 from "./models/AstonMartinDB11";

const Scene = () => {
    const models = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];
    const step = 8;
    const diff = step / 2;
    const getPosition = (start, pos1, pos2, idx) => start ? pos1 * idx : pos2 * (models.length - idx);
    const [ hovered, setHovered ] = useState(false);
    const [ positions, setPositions ] = useState(models.map((_, idx) => getPosition(idx < models.length / 2, step, -step, idx)));

    const min = Math.min(...positions);
    const max = Math.max(...positions);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered]);

    useThree(({camera}) => {
        camera.position.set(0, 1.4, 4.3);
    });

    useFrame(() => {
        models.forEach(function(model, idx) {
            const currX = Math.round(model.current.position.x * 10) / 10;
        
            if (currX !== positions[idx]) {
                const currZ = model.current.position.z;
                const z = -Math.abs(positions[idx] / diff);
                
                if (currX > positions[idx]) {
                    if (currX === max && positions[idx] === min) {
                        model.current.position.x = positions[idx];
                        return;
                    }
                    model.current.position.x -= 0.1;
                } else {
                    if (currX === min && positions[idx] === max) {
                        model.current.position.x = positions[idx];
                        return;
                    }
                    model.current.position.x += 0.1;
                }
                if (currZ !== z) {
                    const distance = 0.1 / diff;
                    model.current.position.z += currZ > z ? -distance : distance;
                }
            }
        });
    });

   const rotateLeft = () => {
        positions.unshift(positions.pop());
        setPositions(positions);
    }
    
    const rotateRight = () => {
        positions.push(positions.shift());
        setPositions(positions);
    }

    return (
        <>
            {models.map(function(value, idx) {
                const start = idx < models.length / 2;

                return (
                    <AstonMartinDB11
                        key={`model${idx}`}
                        ref={value}
                        rotation={[0, 2.4, 0]}
                        position={[getPosition(start, step, -step, idx), 0, getPosition(start, -2, -2, idx)]}
                    />
                );
            })}
            <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
                <Text
                    position={[-1, 0.04, 2.1]}
                    color="black"
                    fontSize={0.15}
                    onClick={rotateLeft}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >&lt;</Text>
                <Text
                    position={[1, 0.04, 2.1]}
                    color="black"
                    fontSize={0.15}
                    onClick={rotateRight}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >&gt;</Text>
            </Billboard>
            <ContactShadows opacity={0.5} width={30} height={10} blur={1} />
            <Environment preset="city" />
            <ambientLight intensity={0.3} />
            <spotLight penumbra={1} position intensity={2} castShadow />
            <pointLight intensity={1} />
        </>
    );
};

export default Scene;
