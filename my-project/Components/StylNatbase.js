import * as React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StylNatbase() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box
          bg="primary.600"
          py={4}
          px={3}
          rounded="md"
          alignSelf="center"
          width="100%"
          maxWidth="100%"
        >
          <HStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <VStack space={2}>
                <Text fontSize="sm" color="white">
                  Tiday @ 9 AM
                </Text>
                <Text color="white" fontSize="lg">
                  Let's Talk About Avatar!
                </Text>
              </VStack>
              <Pressable
                rounded="sm"
                bg="primary.400"
                aliginSelf="flex-start"
                py={2}
                px={3}
              >
                <Text
                  textTransform="uppercase"
                  fontSize={"sm"}
                  fotWeight="bold"
                  color="white"
                >
                  Remind Me
                </Text>
              </Pressable>
            </Box>
            <Image
              source={{
                uri: "https://img.tek.id/img/content/2021/01/28/36829/live-action-avatar-the-last-airbender-masih-dalam-tahap-pra-produksi-ralRZfLVzB.jpg",
              }}
              alt="fly"
              height={100}
              rounded="full"
              width={100}
            />
          </HStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
