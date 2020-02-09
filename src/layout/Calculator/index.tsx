import React, {FC} from "react";
import Mobile from "@src/layout/Calculator/Mobile";
import Desktop from "@src/layout/Calculator/Desctop";
import {useWindowDimensions} from "@src/utils";

export const min = 10;
export const max = 300;

export const cityMap = [
    {city: "Санкт-Петербург", count: 250},
    {city: "Краснодарский край", count: 110},
    {city: "Казань", count: 120},
    {city: "Екатеринбург", count: 130},
    {city: "Новосибирск", count: 140},
    {city: "Нижний Новгород", count:150},
]

const Calculator: FC = () => {
    const {width} = useWindowDimensions();
    return width > 768 ? <Desktop/> : <Mobile/>
}


export default Calculator
