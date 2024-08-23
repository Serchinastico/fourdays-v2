import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button, type OnPress, Row } from "@madeja-studio/telar";
import { TextInput } from "react-native";

interface Props {
  isSearching: boolean;
  onCancelSearchPress: OnPress;
  onSearchPress: OnPress;
  onSearchTextChange: (searchText: string) => Promise<void> | void;
  onSettingsPress: OnPress;
  onSharePress?: OnPress;
  searchText: string;
}

const Header = ({
  isSearching,
  onCancelSearchPress,
  onSearchPress,
  onSearchTextChange,
  onSettingsPress,
  onSharePress,
  searchText,
}: Props) => {
  if (isSearching) {
    return (
      <Row style={tw`py-2 px-2`}>
        <Button.Icon
          color="secondary"
          hasHapticFeedback
          icon={{ family: "Feather", name: "arrow-left" }}
          onPress={onCancelSearchPress}
          variant="text"
        />

        <TextInput
          autoFocus
          onChangeText={onSearchTextChange}
          placeholder={t`Search food`}
          style={tw`text-xl flex-1 mb-1 px-2`}
          value={searchText}
        />

        <Button.Icon
          color="secondary"
          hasHapticFeedback
          icon={{ family: "Feather", name: "x" }}
          onPress={() => onSearchTextChange("")}
          style={tw`pr-2`}
          variant="text"
        />
      </Row>
    );
  }

  return (
    <GenericHeader hideSeparator title={t`Tracker`}>
      <Button.Icon
        color="secondary"
        hasHapticFeedback
        icon={{ family: "Feather", name: "search" }}
        onPress={onSearchPress}
        variant="text"
      />

      <Button.Icon
        color="secondary"
        hasHapticFeedback
        icon={{ family: "Feather", name: "settings" }}
        onPress={onSettingsPress}
        variant="text"
      />

      <Button.Icon
        color="secondary"
        hasHapticFeedback
        icon={{ family: "Feather", name: "share-2" }}
        onPress={onSharePress}
        variant="text"
      />
    </GenericHeader>
  );
};

export default Header;
