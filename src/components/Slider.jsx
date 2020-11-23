import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import gym1 from '../gym1.jpg';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function Slider() {
    return (
        <div>
            <SRLWrapper>
                <Slide data-cy="slider">
                    <img srcset={gym1}
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        alt="Photo 1"
                        data-cy="slider-image"
                        className="composition__photo composition__photo--p1"
                        src={gym1} />
                        
                    <img srcset={gym1}
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        alt="Photo 2"
                        data-cy="slider-image"
                        className="composition__photo composition__photo--p2"
                        src={gym1} />

                    <img srcset={gym1}
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        alt="Photo 3"
                        data-cy="slider-image"
                        className="composition__photo composition__photo--p3"
                        src={gym1} />
                </Slide>
            </SRLWrapper>
        </div>
    )
}

export default Slider
