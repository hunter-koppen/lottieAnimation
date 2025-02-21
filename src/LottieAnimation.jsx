import { createElement } from "react";

import { LottieInit } from "./components/LottieInit";

export function LottieAnimation(props) {
    return (
        <LottieInit
            loop={props.loop}
            width={props.width}
            height={props.height}
            jsonUrl={props.jsonUrl}
            jsonString={props.jsonString}
            triggerPlay={props.triggerPlay?.value}
            onCompleteAction={props.onCompleteAction}
            classNames={props.class}
        />
    );
}
