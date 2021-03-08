import React from "react";
import { Container } from "./styles";
import Lottie from "react-lottie";
const animationData = require("../../assets/lottie/loader.json");
const animationDataSpin = require("../../assets/lottie/spin.json");

const Loader = ({ height = 350, width = 350, spin = false }) => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: spin ? animationDataSpin : animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Container>
            <Lottie
                style={{ pointerEvents: "none" }}
                options={animationOptions}
                height={height}
                width={width}
            />
        </Container>
    );
};

export default Loader;
