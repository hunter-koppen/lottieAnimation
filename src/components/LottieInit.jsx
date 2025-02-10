import { createElement, useEffect, useState, Fragment } from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";

import { useFetchRemoteJson } from "../util/useFetchRemoteJson";
import { transformJson } from "../util/transformJson";

export function LottieInit({ jsonUrl, jsonString, loop, width, height, onCompleteAction, triggerPlay }) {
    const { response } = useFetchRemoteJson(jsonUrl);
    const [animationData, setAnimationData] = useState(null);
    const [dimensions, setDimensions] = useState({ width: undefined, height: undefined });

    const handleAnimationComplete = () => {
        onCompleteAction?.execute();
    };

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

    useEffect(() => {
        if (width?.value !== undefined && height?.value !== undefined) {
            setDimensions({
                width: width.value,
                height: height.value
            });
        }
    }, [width, height]);

    return (
        <Fragment>
            <Lottie
                play={triggerPlay ?? true}
                loop={loop}
                animationData={animationData}
                style={dimensions}
                onComplete={!loop ? handleAnimationComplete : undefined}
                onLoopComplete={loop ? handleAnimationComplete : undefined}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
        </Fragment>
    );
}
