import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button, type OnPress } from "@madeja-studio/telar";

interface Props {
  isInitialSetup: boolean;
  onAddPress: OnPress;
  onClosePress?: OnPress;
  onSearchPress: OnPress;
}

const Header = ({
  isInitialSetup,
  onAddPress,
  onClosePress,
  onSearchPress,
}: Props) => {
  return (
    <GenericHeader title={t`Configuration`}>
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
        icon={{ family: "Feather", name: "plus" }}
        onPress={onAddPress}
        variant="text"
      />

      {!isInitialSetup && (
        <Button.Icon
          color="secondary"
          hasHapticFeedback
          icon={{ family: "Feather", name: "x" }}
          onPress={onClosePress}
          variant="text"
        />
      )}
    </GenericHeader>
  );
};

export default Header;
