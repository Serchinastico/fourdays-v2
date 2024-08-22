import { Header as BaseHeader } from "@app/core/components/Header/Header";
import { Button, type OnPress } from "@madeja-studio/telar";

interface Props {
  onClosePress: OnPress;
  title: string;
}

export const ModalHeader = ({ onClosePress, title }: Props) => {
  return (
    <BaseHeader title={title}>
      <Button.Icon
        hasHapticFeedback
        icon={{ family: "Feather", name: "x" }}
        onPress={onClosePress}
        variant="text"
      />
    </BaseHeader>
  );
};
