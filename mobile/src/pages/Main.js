import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import api from "../services/api";

import { MaterialIcons } from "@expo/vector-icons";

export default function pages({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState();
  const [keyboardHeight, setKeyboardHeight] = useState(20);
  const [techs, setTechs] = useState("");
  const [devs, setDevs] = useState([]);

  const loadDevs = async () => {
    const { latitude, longitude } = currentRegion;

    const response = await api.get("/seach", {
      params: {
        latitude,
        longitude,
        techs
      }
    });
    setDevs(response.data.devs);
  };

  const loadInitialPosition = async () => {
    const { granted } = await requestPermissionsAsync();
    if (!granted) return;

    const { coords } = await getCurrentPositionAsync({
      enableHighAccuracy: true
    });

    const { latitude, longitude } = coords;
    setCurrentRegion({
      latitude,
      longitude,
      latitudeDelta: 0.04,
      longitudeDelta: 0.04
    });
  };

  useEffect(() => {
    loadInitialPosition();

    Keyboard.addListener("keyboardDidShow", () => setKeyboardHeight(320));
    Keyboard.addListener("keyboardDidHide", () => setKeyboardHeight(20));
  }, []);

  if (!currentRegion) return null;

  return (
    <>
      <MapView
        onRegionChange={setCurrentRegion}
        initialRegion={currentRegion}
        style={style.map}
      >
        {devs.map(dev => (
          <Marker
            coordinate={{
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1]
            }}
          >
            <Image source={{ uri: dev.avatar_url }} style={style.avatar} />
            <Callout
              style={style.callout}
              onPress={() => {
                const { github_username } = dev;
                navigation.navigate("Profile", { github_username });
              }}
            >
              <Text style={style.devName}>{dev.name}</Text>
              <Text style={style.devBio}>{dev.bio}</Text>
              <Text style={style.devTechs}>{dev.techs.join(", ")}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={[style.searchForm, { bottom: keyboardHeight }]}>
        <TextInput
          style={style.serachInput}
          autoCorrect={false}
          autoCapitalize="words"
          placeholderTextColor="#999"
          placeholder="Buscar devs por techs..."
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity onPress={() => loadDevs()} style={style.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50
  },
  callout: {
    width: 260,
    padding: 10
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    marginTop: 5,
    color: "#666"
  },
  devTechs: {
    marginTop: 5
  },
  searchForm: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row"
  },
  serachInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#bE4dFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  }
});
