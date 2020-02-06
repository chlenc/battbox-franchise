import React, {FC} from "react";
import Mobile from "@src/layout/Calculator/Mobile";
import Desktop from "@src/layout/Calculator/Desctop";
import {useWindowDimensions} from "@src/utils";

export const min = 10;
export const max = 300;

const Calculator: FC = () => {
    const {width} = useWindowDimensions();
    return width > 768 ? <Desktop/> : <Mobile/>
}
export default Calculator
