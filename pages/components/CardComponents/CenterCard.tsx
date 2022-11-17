import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";

interface CardProps {
    size: number;
    type: string;
    number?: string;
    sign?: string;
}

const CenterCard = ({ size, type, number, sign }: CardProps): JSX.Element => {
    function getImage(sign: string) {
        if (!sign) return null;
        console.log(sign);
        return `/cards/${sign}.png`;
    }

    return (
        <>
            <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {type === "number" && (
                    <Text
                    fontSize={size * 0.5 + "px"}
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
                {type === "special" && (
                    <Image
                        src={getImage(sign)}
                        alt={sign}
                        width={"70%"}
                        height={size * 0.63666 - (size * 0.07) + "px"}
                    />
                )}
            </Box>
        </>
    );
};

export default CenterCard;
