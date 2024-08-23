import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button, type OnPress } from "@madeja-studio/telar";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof GenericHeader.Search> {
  isInitialSetup: boolean;
  isSearching: boolean;
  onAddPress: OnPress;
  onClosePress?: OnPress;
  onSearchPress: OnPress;
}

const Header = ({
  isInitialSetup,
  isSearching,
  onAddPress,
  onClosePress,
  onSearchPress,
  ...searchProps
}: Props) => {
  if (isSearching) {
    return <GenericHeader.Search {...searchProps} />;
  }

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
