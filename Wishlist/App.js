import React, { useState } from "react";
import {
  Flex,
  Text,
  Checkbox,
  Heading,
  Input,
  Icon,
  Box,
  ScrollView,
  VStack,
  NativeBaseProvider,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

function App() {
  const [item, setItem] = useState([]);
  const [temporary, setTemporary] = useState("");

  const saveItem = () => {
    if (temporary == null || temporary.trim() === "") {
      alert("Item tidak boleh kosong");
    } else {
      setItem([...item, temporary]);
    }
    setTemporary("");
  };

  const onDelete = (idx) => {
    let data = [...item];
    data.splice(idx, 1);
    setItem(data);
  };

  return (
    <ScrollView>
      <Flex align="center">
        <VStack space={2} w="100%">
          <Heading size="md" color="primary.400">
            Wishlist
          </Heading>
          <Input
            InputRightElement={
              <Icon
                as={<MaterialIcons name="add" onPress={() => saveItem()} />}
                size={6}
                mr="2"
                color="muted.800"
              />
            }
            variant="outline"
            placeholder="Item baru"
            onChangeText={(text) => setTemporary(text)}
            mb={4}
            value={temporary}
          />
          {item.map((items, idx) => (
            <Flex
              direction="row"
              mb="2.5"
              mt="1.5"
              justify="space-between"
              _text={{
                color: "coolGray.800",
              }}
            >
              <Checkbox colorScheme="green">
                <Text mx={2}>{items}</Text>
              </Checkbox>
              <MaterialCommunityIcons
                name="delete"
                size={24}
                color="black"
                onPress={() => onDelete(idx)}
              />
            </Flex>
          ))}
        </VStack>
      </Flex>
    </ScrollView>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Box h="100%" p={7}>
        <App />
      </Box>
    </NativeBaseProvider>
  );
}
