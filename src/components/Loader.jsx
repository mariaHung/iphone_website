import { Html } from '@react-three/drei'
import React from 'react'
import FunnyGuy from './FunnyGuy'
const Loader = () => {
  return (
    <Html>
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='w-[10vw] h-[10vw] rounded-full'>
                Loading... <FunnyGuy />
            </div>

        </div>
    </Html>
  )
}

export default Loader