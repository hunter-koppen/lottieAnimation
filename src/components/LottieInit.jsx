import { createElement, useEffect, useState, Fragment } from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";

import { useFetchRemoteJson } from "../util/useFetchRemoteJson";
import { transformJson } from "../util/transformJson";

export function LottieInit({ jsonUrl, jsonString, loop, width, height, onMicroflowComplete, triggerPlay }) {
    const { response } = useFetchRemoteJson(jsonUrl);
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        console.log('triggerPlay value:', triggerPlay);
    }, [triggerPlay]);

    useEffect(() => {
        if (jsonString) {
            const transformedJson = transformJson(jsonString.value);
            setAnimationData(transformedJson);
        }
    }, [jsonString]);

    useEffect(() => {
        if (jsonUrl && response) {
            setAnimationData(response);
        }
    }, [response, jsonUrl]);

    return (
        <Fragment>
            <Lottie
                play={triggerPlay ?? true}
                loop={loop}
                animationData={animationData}
                style={{ width, height }}
                onComplete={() => onMicroflowComplete?.execute()}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
        </Fragment>
    );
}
