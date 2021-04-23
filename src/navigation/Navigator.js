import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SideMenu } from "../navigation/SideMenu";

export const Navigator = () => {
  return (
    <NavigationContainer>
      <SideMenu />
    </NavigationContainer>
  );
};
