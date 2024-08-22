import { RootNavigationParamList } from "@app/core/navigation/routes";
import { atoms } from "@app/core/storage/state";
import { t } from "@lingui/macro";
import { randomString } from "@madeja-studio/cepillo";
import {
  Button,
  Column,
  SafeAreaView,
  Separator,
  color,
  useToast,
} from "@madeja-studio/telar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

import Header from "./components/Header";
import InputContainer from "./components/InputContainer";

const GROUP_CREATED_TOAST = {
  subtitle: t`You have created a new group`,
  title: t`Group created`,
  variant: "success" as const,
};
interface Props
  extends NativeStackScreenProps<RootNavigationParamList, "createGroup"> {}

const CreateGroupScreen = ({ navigation }: Props) => {
  const setCustomGroupList = useSetAtom(atoms.customGroupList);
  const [name, setName] = useState<string>("");
  const { showToast } = useToast();

  const onCreateGroupPress = useCallback(async () => {
    await setCustomGroupList(async (prev) => [
      ...(await prev),
      { id: randomString(), name },
    ]);
    showToast(GROUP_CREATED_TOAST);
    navigation.goBack();
  }, [name]);

  const isNameDefined = name.trim().length > 0;

  return (
    <SafeAreaView>
      <Header onClosePress={() => navigation.goBack()} />

      <Column style={tw`justify-between pt-4 flex flex-1`}>
        <Column style={tw`flex flex-1`}>
          <InputContainer label={t`Name`}>
            <TextInput
              blurOnSubmit
              onChangeText={setName}
              placeholder={t`e.g. Fats`}
              placeholderTextColor={color.warmGray[60]}
              returnKeyType="done"
              style={tw`py-2 text-lg`}
              value={name}
            />

            <Separator />
          </InputContainer>
        </Column>

        <Button
          hasHapticFeedback
          isDisabled={!isNameDefined}
          onPress={onCreateGroupPress}
          style={tw`self-center mb-4`}
          text={t`Create`}
        />
      </Column>
    </SafeAreaView>
  );
};

export default CreateGroupScreen;
