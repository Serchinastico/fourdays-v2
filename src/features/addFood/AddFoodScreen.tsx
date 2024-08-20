import { RootNavigationParamList } from "@app/core/navigation/routes";
import { atoms } from "@app/core/storage/state";
import { BASE_FOOD_GROUPS } from "@app/features/tracker/models/food";
import { t } from "@lingui/macro";
import { randomString } from "@madeja-studio/cepillo";
import {
  Button,
  Column,
  SafeAreaView,
  Separator,
  VectorIcon,
  color,
  useToast,
} from "@madeja-studio/telar";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { Text, TextInput, View } from "react-native";
import tw from "twrnc";

import Header from "./components/Header";
import InputContainer from "./components/InputContainer";

interface Props
  extends NativeStackScreenProps<RootNavigationParamList, "addFood"> {}

const AddFoodScreen = ({ navigation }: Props) => {
  const setCustomFoodList = useSetAtom(atoms.customFoodList);
  const [groupId, setGroupId] = useState(BASE_FOOD_GROUPS[0].id);
  const [name, setName] = useState<string>("");
  const { showToast } = useToast();

  const onAddFoodPress = useCallback(async () => {
    await setCustomFoodList(async (prev) => [
      ...(await prev),
      {
        groupId,
        id: randomString(),
        image: { data: "", tag: "require" as const },
        name,
      },
    ]);
    showToast({
      subtitle: t`You have added a new food item to your collection`,
      title: t`Food created`,
      variant: "success",
    });
    navigation.goBack();
  }, [name, groupId]);

  const isNameDefined = name.trim().length > 0;

  return (
    <SafeAreaView>
      <Header onClosePress={() => navigation.goBack()} />

      <Column style={tw`justify-between pt-4 flex flex-1`}>
        <Column style={tw`flex flex-1`}>
          <InputContainer label={t`Group`}>
            <Picker
              onValueChange={(value) => setGroupId(value)}
              placeholder={t`e.g. Cocoa Powder`}
              selectedValue={groupId}
            >
              {BASE_FOOD_GROUPS.map((group) => (
                <Picker.Item
                  key={group.id}
                  label={group.name}
                  value={group.id}
                />
              ))}
            </Picker>
          </InputContainer>

          <InputContainer label={t`Name`}>
            <TextInput
              blurOnSubmit
              onChangeText={setName}
              placeholder={t`e.g. Cocoa Powder`}
              placeholderTextColor={color.warmGray[60]}
              returnKeyType="done"
              style={tw`py-2 text-lg`}
              value={name}
            />

            <Separator />
          </InputContainer>

          <View style={tw`flex-1 items-center justify-center`}>
            <Button.Container
              hasHapticFeedback
              style={[
                tw`p-2 self-center rounded-lg shadow-black shadow-offset-0 shadow-opacity-10 shadow-radius-2`,
                { backgroundColor: color.white },
              ]}
            >
              <Column style={tw`items-center`}>
                <View
                  style={[
                    tw`justify-center items-center border-dashed border rounded-lg w-32 h-32`,
                    { borderColor: color.warmGray[50] },
                  ]}
                >
                  <VectorIcon
                    color={color.warmGray[50]}
                    icon={{ family: "Feather", name: "plus" }}
                    size={48}
                  />
                </View>

                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  style={[
                    tw`text-lg font-medium text-center mt-4 w-32`,
                    { opacity: isNameDefined ? 1 : 0.3 },
                  ]}
                >
                  {isNameDefined ? name : t`Cocoa Powder`}
                </Text>
              </Column>
            </Button.Container>
          </View>
        </Column>

        <Button
          hasHapticFeedback
          isDisabled={!isNameDefined}
          onPress={onAddFoodPress}
          style={tw`self-center mb-4`}
          text={t`Add`}
        />
      </Column>
    </SafeAreaView>
  );
};

export default AddFoodScreen;
