//components
import React, {useCallback} from 'react'
//particles
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../../utils/particles";
const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />
    )
}

export default Particle