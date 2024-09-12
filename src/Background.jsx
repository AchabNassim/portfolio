import { useState } from 'react'
import {motion, animate} from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function Background() {

  return (
    <>
      <motion.section
        animate={{
          backgroundImage: [
            // "radial-gradient(110% 110% at 50% 0%, #000212 50%, #5f8df7 100%)",
            "radial-gradient(110% 110% at 50% 0%, #000212 50%, #00a1ad 100%)",
            "radial-gradient(110% 110% at 50% 0%, #000212 50%, #88465e 100%)"
            // "radial-gradient(155% 155% at 50% 0%, #000212 50%, #488dff 90%)"
          ]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
        style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: "-1"
        }}
      >
      <div id='starsContainer' style={{
        position: "absolute",
        zIndex: "-1",
        width: "100%",
        height: "100%"
      }}>
        <Canvas>
          <Stars radius={50} count={4000} factor={3.5} fade speed={2} />
        </Canvas>
      </div>
      </motion.section>
    </>
  )
}

export default Background;
