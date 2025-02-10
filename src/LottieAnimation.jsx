import { createElement } from "react";

import { LottieInit } from "./components/LottieInit";

export function LottieAnimation({ jsonUrl, jsonString, loop, width, height, onCompleteAction, triggerPlay }) {
    return (
        <LottieInit
            loop={loop}
            width={width}
            height={height}
            jsonUrl={jsonUrl}
            jsonString={jsonString}
            triggerPlay={triggerPlay?.value}
            onCompleteAction={onCompleteAction}
        />
    );
}
