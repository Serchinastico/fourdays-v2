import { Header } from "@app/core/components/Header";
import ImagePickerDialog from "@app/core/components/ImagePicker/ImagePickerDialog";
import { Input } from "@app/core/components/Input";
import useImagePicker, {
  ImagePickerResult,
} from "@app/core/hooks/useImagePicker";
import { RootScreenProps } from "@app/core/navigation/routes";
import { atoms } from "@app/core/storage/state";
import { useFoodGroup } from "@app/domain/food/hooks/useFoodGroup";
import {
  BASE_FOOD_GROUPS,
  Base64FoodImage,
} from "@app/domain/food/models/food";
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
import * as Device from "expo-device";
import { DeviceType } from "expo-device";
import { useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

const FOOD_ADDED_TOAST = {
  subtitle: t`You have added a new food item to your collection`,
  title: t`Food created`,
  variant: "success" as const,
};

const NO_PERMISSIONS_TOAST = {
  subtitle: t`Fourdays has no permissions to access your pictures`,
  title: t`Unable to pick an image`,
  variant: "error" as const,
};

const CAMERA_UNAVAILABLE_TOAST = {
  subtitle: t`Camera is unavailable in this device`,
  title: t`Unable to pick an image`,
  variant: "error" as const,
};

const CreateFoodScreen = ({ navigation }: RootScreenProps<"createFood">) => {
  const setCustomFoodList = useSetAtom(atoms.customFoodList);
  const [groupId, setGroupId] = useState(BASE_FOOD_GROUPS[0].id);
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<Base64FoodImage | null>(null);
  const [isImagePickerDialogVisible, setIsImagePickerDialogVisible] =
    useState(false);
  const { getImageFrom } = useImagePicker();
  const { allGroups } = useFoodGroup();
  const { showToast } = useToast();

  const onCreateFoodPress = useCallback(async () => {
    await setCustomFoodList(async (prev) => [
      ...(await prev),
      {
        groupId,
        id: randomString(),
        image: { tag: "base64" as const, ...image! },
        name,
      },
    ]);
    showToast(FOOD_ADDED_TOAST);
    navigation.goBack();
  }, [name, image, groupId]);

  const onImageSelect = useCallback(
    async (promise: Promise<ImagePickerResult>) => {
      setIsImagePickerDialogVisible(false);
      const result = await promise;

      switch (result.tag) {
        case "error":
          switch (result.code) {
            case "access_denied":
              showToast(NO_PERMISSIONS_TOAST);
              break;
            case "camera_unavailable": {
              showToast(CAMERA_UNAVAILABLE_TOAST);
            }
          }
          break;
        case "success":
          setImage({
            data: { uri: `data:image/png;base64,${result.asset.base64}` },
          });
      }
    },
    []
  );

  const isNameDefined = name.trim().length > 0;
  const isImageDefined = image !== null;

  return (
    <SafeAreaView>
      <Header.Modal
        onClosePress={() => navigation.goBack()}
        title={t`Create food`}
      />

      <Column style={tw`justify-between pt-4 flex flex-1`}>
        <Column style={tw`flex flex-1`}>
          <Input.Container label={t`Group`}>
            <Picker
              onValueChange={(value) => setGroupId(value)}
              placeholder={t`e.g. Cocoa Powder`}
              selectedValue={groupId}
            >
              {allGroups.map((group) => (
                <Picker.Item
                  key={group.id}
                  label={group.name}
                  value={group.id}
                />
              ))}
            </Picker>
          </Input.Container>

          <Input.Container label={t`Name`}>
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
          </Input.Container>

          <View style={tw`flex-1 items-center justify-center`}>
            <Button.Container
              hasHapticFeedback
              onPress={() => setIsImagePickerDialogVisible(true)}
              style={[
                tw`p-2 self-center rounded-lg shadow-black shadow-offset-0 shadow-opacity-10 shadow-radius-2`,
                { backgroundColor: color.white },
              ]}
            >
              <Column style={tw`items-center`}>
                {image ? (
                  <View
                    style={tw.style(
                      `justify-center items-center rounded-lg w-32 h-32`,
                      {
                        "w-100 h-100": Device.deviceType === DeviceType.TABLET,
                      },
                      { borderColor: color.warmGray[50] }
                    )}
                  >
                    <Image
                      source={{ uri: image.data.uri }}
                      style={[
                        tw`aspect-square rounded-md`,
                        {
                          height: undefined,
                          resizeMode: "cover",
                          width: "100%",
                        },
                      ]}
                    />
                  </View>
                ) : (
                  <View
                    style={tw.style(
                      `justify-center items-center border-dashed border rounded-lg w-32 h-32`,
                      {
                        "w-100 h-100": Device.deviceType === DeviceType.TABLET,
                      },
                      { borderColor: color.warmGray[50] }
                    )}
                  >
                    <VectorIcon
                      color={color.warmGray[50]}
                      icon={{ family: "Feather", name: "plus" }}
                      size={48}
                    />
                  </View>
                )}

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
          isDisabled={!isNameDefined || !isImageDefined}
          onPress={onCreateFoodPress}
          style={tw`self-center mb-4`}
          text={t`Create`}
        />
      </Column>

      <ImagePickerDialog
        isVisible={isImagePickerDialogVisible}
        onClose={() => setIsImagePickerDialogVisible(false)}
        onFromCamera={() =>
          onImageSelect(getImageFrom("camera", { base64: true, quality: 0.1 }))
        }
        onFromLibrary={() =>
          onImageSelect(getImageFrom("media_library", { base64: true }))
        }
      />
    </SafeAreaView>
  );
};

export default CreateFoodScreen;
