import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {  Feather } from "@expo/vector-icons"

interface Props {
  screenName: string;
  showBack?: boolean;
}

const Header: React.FC<Props> = ({ screenName, showBack }) => {
  const nav = useNavigation();

  const backScreen = () => {
    if (nav.canGoBack()) {
      return nav.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {showBack && (
          <TouchableOpacity onPress={backScreen}>
            <Feather name="arrow-left" size={20} />
          </TouchableOpacity>
      )}
      <View style={styles.screenNameContainer}>
        <Text style={styles.screenName}>{screenName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
