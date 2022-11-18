import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";

import LeftCorner from "./CardComponents/LeftCorner";
import RightCorner from "./CardComponents/RightCorner";
import CenterCard from "./CardComponents/CenterCard";

interface CardProps {
    size: number;
    type: string;
    color: string;
    number?: string;
    sign?: string;
}

const Card = ({ size, type, color, number, sign }: CardProps): JSX.Element => {
    function getImage(sign: string) {
        if (!sign) return null;
        return `/cards/${sign}.png`;
    }

    function getColor(color: string) {
        switch (color) {
            case "red":
                return "#d93d26ff";
            case "green":
                return "#85c040ff";
            case "blue":
                return "#0875b6ff";
            case "yellow":
                return "#ffd437ff";
            case "black":
                return "#000000ff";
            default:
                break;
        }
    }

    return (
        <>
            <Box
                backgroundColor={getColor(color)}
                borderRadius={size * 0.15 + "px"}
                boxShadow="5px 8px 10px rgba(0,0,0,0.5)"
                width={size + `px`}
                height={size * 1.63666 + `px`}
                padding={(type === "special" || type === "super") && sign !== "draw_two" ? size * 0.1 + `px` :"none"}
                paddingRight={type === "number" || (sign === "draw_two" || sign === "wild_draw_four") ? size * 0.1 + `px` : "none"}
                paddingLeft={type === "number" || (sign === "draw_two" || sign === "wild_draw_four") ? size * 0.1 + `px` : "none"}
                paddingTop={type === "number" || (sign === "draw_two" || sign === "wild_draw_four") ? size * 0.02 + `px` : "none"}
                paddingBottom={type === "number" || (sign === "draw_two" || sign === "wild_draw_four") ? size * 0.02 + `px` : "none"}
            >
                <VStack
                    spacing="0"
                    alignItems="flex-start"
                    height="100%"
                    justifyContent="space-between"
                >
                    <LeftCorner size={size} type={type} number={number} sign={sign} />
                    <CenterCard size={size} type={type} number={number} sign={sign} />
                    <RightCorner size={size} type={type} number={number} sign={sign} />
                </VStack>
            </Box>
        </>
    );
};

export default Card;
