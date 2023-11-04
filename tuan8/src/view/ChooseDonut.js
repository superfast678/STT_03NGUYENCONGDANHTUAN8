import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const imgDonut = {
  img1: require("../img/green.png"),
  img2: require("../img/pink.png"),
  img3: require("../img/red.png"),
  img4: require("../img/yellow.png"),
};

const dataDonut = [
  {
    id: 1,
    image: imgDonut.img1,
    name: "Tasty Donut",
    price: 10.0,
  },
  {
    id: 2,
    image: imgDonut.img2,
    name: "Tasty Donut",
    price: 10.0,
  },
  {
    id: 3,
    image: imgDonut.img3,
    name: "Pink Donut",
    price: 20.0,
  },
  {
    id: 4,
    image: imgDonut.img4,
    name: "Floating Donut",
    price: 30.0,
  },
  {
    id: 5,
    image: imgDonut.img1,
    name: "Floating Donut",
    price: 30.0,
  },
  {
    id: 6,
    image: imgDonut.img2,
    name: "Pink Donut",
    price: 20.0,
  },
  {
    id: 7,
    image: imgDonut.img3,
    name: "Tasty Donut",
    price: 10.0,
  },
  {
    id: 8,
    image: imgDonut.img4,
    name: "Pink Donut",
    price: 20.0,
  },
  {
    id: 9,
    image: imgDonut.img2,
    name: "Floating Donut",
    price: 30.0,
  },
  {
    id: 10,
    image: imgDonut.img3,
    name: "Tasty Donut",
    price: 10.0,
  },
];

const ChooseDonut = ({ navigation }) => {
  const [filterDonut, setDataDonut] = useState(dataDonut);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: 60 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 17,
              color: "#000000A6",
              fontWeight: "700",
              paddingTop: 5,
              paddingLeft: 10,
            }}
          >
            Welcome, Jala!
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", paddingLeft: 10 }}>
            Choice your best food
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "80%",
          height: 50,
          justifyContent: "center",
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="Search food"
          style={{ paddingLeft: 10, color: "grey", fontSize: 16 }}
        ></TextInput>
      </View>
      <View
        style={{
          width: "100%",
          height: 65,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "85%",
              height: "70%",
              backgroundColor: "#F1B000",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              setDataDonut(dataDonut.filter((item) => item.type === "Tasty"))
            }
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>Tasty</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "85%",
              height: "70%",
              backgroundColor: "pink",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              setDataDonut(dataDonut.filter((item) => item.type === "pink"))
            }
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>Pink</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            justifyContent: "center",
            alignItems: "centerw",
          }}
        >
          <TouchableOpacity
            style={{
              width: "85%",
              height: "70%",
              backgroundColor: "green",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>Floating</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={filterDonut}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              height: 130,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: "95%",
                height: 125,
                borderRadius: 10,
                backgroundColor: "#F4DDDD",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 3.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 110, height: 110, resizeMode: "contain" }}
                ></Image>
              </View>
              <View style={{ flex: 6.5 }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ fontWeight: "700", fontSize: 20 }}>
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#0000008A",
                      fontWeight: "700",
                      fontSize: 17,
                    }}
                  >
                    Spicy tasty donut family
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 8,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 20,
                        paddingLeft: 10,
                      }}
                    >
                      $ {item.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Main", { data: item })
                      }
                    >
                      <Image
                        source={require("../img/buttonAdd.png")}
                        style={{
                          width: 45,
                          height: 45,
                          resizeMode: "contain",
                          paddingRight: 3,
                          paddingBottom: 3,
                        }}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ChooseDonut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  one: {
    flex: 1,
  },
  two: {
    flex: 1,
    justifyContent: "center",
  },
  three: {
    flex: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  four: {
    flex: 7,
    borderBottomWidth: 1,
  },
});
