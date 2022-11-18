import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";

interface CardProps {
    size: number;
    type: string;
    number?: string;
    sign?: string;
}

const RightCorner = ({ size, type, number, sign }: CardProps): JSX.Element => {
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
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                {type === "number" && (
                    <Text
                    fontSize={size * 0.25 + "px"}
                        color={"white"}
                        transform={"rotate(180deg)"}
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
                        transform={"rotate(180deg)"}
                    />
                )}
                {type === "special" && sign === "draw_two" && (
                    <Text
                        fontSize={size * 0.25 + "px"}
                        color={"white"}
                        transform={"rotate(180deg)"}
                        textDecoration={
                            number === "9" || number === "6"
                                ? "underline"
                                : "none"
                        }
                    >
                        +2
                    </Text>
                )}
                {type === "super" && sign === "wild" && (
                    <Image
                        src={getImage(sign)}
                        alt={sign}
                        width={"30%"}
                        height={size * 0.3 - (size * 0.07) + "px"}
                        transform={"rotate(180deg)"}
                    />
                )}
                {type === "super" && sign === "wild_draw_four" && (
                    <Text
                    fontSize={size * 0.25 + "px"}
                    color={"white"}
                    transform={"rotate(180deg)"}
                    textDecoration={
                        number === "9" || number === "6"
                            ? "underline"
                            : "none"
                    }
                >
                    +4
                </Text>
                )}
            </Box>
        </>
    );
};

export default RightCorner;
