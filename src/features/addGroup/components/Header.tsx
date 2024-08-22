import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button, type OnPress } from "@madeja-studio/telar";

interface Props {
  onClosePress: OnPress;
}

const Header = ({ onClosePress }: Props) => {
  return (
    <GenericHeader title={t`Create group`}>
      <Button.Icon
        hasHapticFeedback
        icon={{ family: "Feather", name: "x" }}
        onPress={onClosePress}
        variant="text"
      />
    </GenericHeader>
  );
};

export default Header;
