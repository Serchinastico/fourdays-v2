import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button } from "@madeja-studio/telar";
import { OnPress } from "@madeja-studio/telar/lib/typescript/src/component/Button/press";

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
        hasHapticFeedback
        icon={{ family: "Feather", name: "search" }}
        onPress={onSearchPress}
        variant="text"
      />

      <Button.Icon
        hasHapticFeedback
        icon={{ family: "Feather", name: "plus" }}
        onPress={onAddPress}
        variant="text"
      />

      {!isInitialSetup && (
        <Button.Icon
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
