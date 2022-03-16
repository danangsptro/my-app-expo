import React, { useEffect, useState } from "react";
import { Box, Center, FlatList } from "native-base";

import ApiFeed from "../Api/ApiFeed";
import AppCard from "../Components/AppCard";

function FeedScreen() {
  const [myJson, setMyJson] = useState([]);

  const renderItem = ({ item }) => <AppCard title={item.title} />;

  const postApi = async () => {
    const result = await ApiFeed.get("/posts");
    console.log(result.data, "halo");
    return setMyJson(result.data);
  };

  useEffect(() => {
    postApi();
  }, []);

  return (
    <Box safeArea>
      <Center>
        <FlatList
          data={myJson}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Center>
    </Box>
  );
}

export default FeedScreen;
