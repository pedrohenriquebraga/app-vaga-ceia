import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainRoutes from "./main.routes";


export default function Routes() {
  // Implementado para futura adição de uma funcionalidade de login

  const [isLogged, setIsLogged] = useState(true);

  return (
    <NavigationContainer>
        {isLogged && <MainRoutes />}
    </NavigationContainer>
  );
}
