import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";

interface CardProps {
    size: number;
    type: string;
    number?: string;
    sign?: string;
}

const LeftCorner = ({ size, type, number, sign }: CardProps): JSX.Element => {
    function getImage(sign: string) {
        if (!sign) return null;
        return `/cards/${sign}.png`;
    }

    return (
        <>
            <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {type === "number" && (
                    <Text
                        fontSize={size * 0.25 + "px"}
                        color={"white"}
                        textDecoration={
                            number === "9" || number === "6"
                                ? "underline"
                                : "none"
                        }
                    >
                        {number}
                    </Text>
                )}
                {type === "special" && sign !== "draw_two" && (
                    <Image
                        src={getImage(sign)}
                        alt={sign}
                        width={"30%"}
                        height={size * 0.3 - (size * 0.07) + "px"}
                    />
                )}
                {type === "special" && sign === "draw_two" && (
                    <Text
                        fontSize={size * 0.25 + "px"}
                        color={"white"}
                        textDecoration={
                            number === "9" || number === "6"
                                ? "underline"
                                : "none"
                        }
                    >
                        +2
                    </Text>
                )}
            </Box>
        </>
    );
};

export default LeftCorner;
