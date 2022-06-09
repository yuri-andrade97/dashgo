import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Yuri Andrade</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    dev.yuri97@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Yuri Andrade" />
        </Flex>
    );
}