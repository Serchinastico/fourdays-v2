import { t } from "@lingui/macro";
import { Button, type OnPress, Row, VectorIcon } from "@madeja-studio/telar";
import { Text } from "react-native";
import tw from "twrnc";

interface Props {
  onPress: OnPress;
}

const CreateGroup = ({ onPress }: Props) => {
  return (
    <Button.Container hasHapticFeedback onPress={onPress}>
      <Row style={tw`p-4 mb-2 justify-between`}>
        <Text style={tw`text-xl font-medium`}>{t`Create Group`}</Text>

        <VectorIcon
          icon={{ family: "Feather", name: "plus" }}
          size={24}
          style={tw`px-2`}
        />
      </Row>
    </Button.Container>
  );
};

export default CreateGroup;
