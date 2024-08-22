import { t } from "@lingui/macro";
import { Button, Column, Dialog, type OnPress } from "@madeja-studio/telar";
import { ComponentProps } from "react";
import { Text } from "react-native";

interface Props extends ComponentProps<typeof Dialog> {
  onFromCamera: OnPress;
  onFromLibrary: OnPress;
}

const ImagePickerDialog = ({
  onFromCamera,
  onFromLibrary,
  ...props
}: Props) => {
  return (
    <Dialog {...props}>
      <Column>
        <Text style={tw`text-xl font-medium mb-6`}>{t`Select an image`}</Text>

        <Button onPress={onFromCamera} style={tw`mb-4`} text={t`From Camera`} />
        <Button onPress={onFromLibrary} text={t`From Media Library`} />
      </Column>
    </Dialog>
  );
};
export default ImagePickerDialog;
