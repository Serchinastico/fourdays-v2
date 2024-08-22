import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button, type OnPress } from "@madeja-studio/telar";

interface Props {
  onSearchPress: OnPress;
  onSettingsPress: OnPress;
  onSharePress?: OnPress;
}

const Header = ({ onSearchPress, onSettingsPress, onSharePress }: Props) => {
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
