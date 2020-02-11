/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";
import kludge from "./kludge.svg";
import {useWindowDimensions} from "@src/utils";
import Tarif_mobile from "@src/layout/Tarif/Tarif_mobile";
import Tarif_desktop from "@src/layout/Tarif/Tarif_desktop";

const Tarif = () => {
    const {width} = useWindowDimensions();
    return width > 878
        // ? <img css={css`width: 100vw;height: auto;`} src={kludge} alt=""/>
        ? <Tarif_desktop/>
        : <Tarif_mobile/>
}

export default Tarif
