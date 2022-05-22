import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  Image,
} from "native-base";

const url = "https://randomuser.me/api/?results=20";

export default function Latihan() {
  const [list, setList] = useState([]);

  const getRandomUser = async () => {
    const res = await fetch(url);
    const randUser = await res.json();
    setList(randUser.results);
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box
          bg="light.700"
          py={4}
          px={3}
          alignSelf="center"
          width="100%"
          maxWidth="100%"
        >
          <HStack justifyContent="flex-start">
            <Box>
              <VStack>
                <Text color="white" fontSize="lg">
                  Let's Talk About Avatar!
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>

        <ScrollView style={styles.scroll}>
          {/* <Text>{list.length && JSON.stringify(list[0])}</Text> */}
          {list.map((data) => {
            const {
              name: { title, first, last },
              location: {
                street: { number, name },
                city,
                country,
              },
              email,
              login: { uuid },
              picture: { medium },
            } = data;
            return (
              <Flex
                direction="row"
                key={uuid}
                bg="light.200"
                mb="2.5"
                rounded="sm"
                alignSelf="center"
                width="100%"
                maxWidth="100%"
              >
                <Image
                  m="2"
                  alt="fly"
                  height={50}
                  rounded="sm"
                  width={50}
                  source={{
                    uri: medium,
                  }}
                />
                <Box>
                  <Text color="black" fontSize="md" bold>
                    {title}. {first}
                    {last}
                  </Text>
                  <Text>
                    {number} {name}, {city}, {country}
                  </Text>
                  <Text color="primary.600">{email}</Text>
                </Box>
              </Flex>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scroll: {
    backgroundColor: "#57534e",
    padding: 10,
  },
});
