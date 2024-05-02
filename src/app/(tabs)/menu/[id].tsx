import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { defaultRestaurantImage } from "@/src/components/ProductListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() == id);

  const addToCart = () => {
    console.warn("Added to cart size: ",selectedSize)
  }

  if (!product) {
    return <Text>404 product</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultRestaurantImage }}
        style={styles.image}
      />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => 
              setSelectedSize(size)
            }
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
              ]}
              key={size}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop:'auto'
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 45,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;
