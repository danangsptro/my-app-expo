import { Box, Center, Heading, HStack, Image, Stack, Text } from "native-base";
import React from "react";

function AppCardImage() {
  return (
    <Stack
      direction={["column", "column", "row"]}
      rounded="lg"
      overflow="hidden"
      width={["72", "72", "4/6"]}
      shadow="1"
      _light={{
        backgroundColor: "coolGray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
    >
      <Box>
        <Image
          w={["100%", "100%", "40"]}
          h="100%"
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
          }}
          alt="image"
        />
        <Center
          bg="violet.500"
          _text={{
            color: "white",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack flex="1" p="4" space={[3, 3, 1.5]}>
        <Stack space="2">
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            color="violet.500"
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space="4" justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  );
}

export default AppCardImage;
