import { Header as GenericHeader } from "@app/core/components/Header";
import { t } from "@lingui/macro";
import { Button } from "@madeja-studio/telar";
import { OnPress } from "@madeja-studio/telar/lib/typescript/src/component/Button/press";

interface Props {
  onClosePress: OnPress;
}

const Header = ({ onClosePress }: Props) => {
  return (
    <GenericHeader title={t`Add Food`}>
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
