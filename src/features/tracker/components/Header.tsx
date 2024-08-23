import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button, type OnPress } from "@madeja-studio/telar";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof GenericHeader.Search> {
  isSearching: boolean;
  onSearchPress: OnPress;
  onSettingsPress: OnPress;
  onSharePress?: OnPress;
}

const Header = ({
  isSearching,
  onSearchPress,
  onSettingsPress,
  onSharePress,
  ...searchProps
}: Props) => {
  if (isSearching) {
    return <GenericHeader.Search {...searchProps} />;
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
