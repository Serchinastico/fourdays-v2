import RootNavigation from "./navigation/RootNavigation";
import AllProviders from "./providers/AllProviders";

export default function App() {
  return (
    <AllProviders>
      <RootNavigation />
    </AllProviders>
  );
}
