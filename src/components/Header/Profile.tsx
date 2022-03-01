import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Vitor Lima</Text>
        <Text fontSize="small" color="gray.300">
          jvolima2004@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="João Vitor Lima" src="https://github.com/jvolima.png"/>
    </Flex>
  )
}