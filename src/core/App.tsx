import { StatusBar } from "expo-status-bar";

import { bootstrap } from "./bootstrap";
import RootNavigation from "./navigation/RootNavigation";
import AllProviders from "./providers/AllProviders";

bootstrap();

export default function App() {
  return (
    <AllProviders>
      <StatusBar style="dark" />

      <RootNavigation />
    </AllProviders>
  );
}
