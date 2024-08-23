import { t } from "@lingui/macro";
import { Button, OnPress, Row } from "@madeja-studio/telar";
import { TextInput } from "react-native";

interface Props {
  onCancelSearchPress: OnPress;
  onSearchTextChange: (searchText: string) => Promise<void> | void;
  searchText: string;
}

export const SearchHeader = ({
  onCancelSearchPress,
  onSearchTextChange,
  searchText,
}: Props) => {
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
};
