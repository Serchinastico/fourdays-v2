import { t } from "@lingui/macro";
import { Tagged } from "@madeja-studio/cepillo";
import * as ImagePicker from "expo-image-picker";
import { useCallback } from "react";

interface ImagePickerSuccess {
  asset: ImagePicker.ImagePickerAsset;
}

interface ImagePickerError {
  code: "access_denied" | "camera_unavailable" | "user_canceled";
  message?: string;
}

export type ImagePickerResult =
  | Tagged<"error", ImagePickerError>
  | Tagged<"success", ImagePickerSuccess>;

const ACCESS_DENIED_ERROR: ImagePickerResult = {
  code: "access_denied",
  message: t`Access to your camera or media library is required to pick a picture`,
  tag: "error",
};

const USER_CANCELED_ERROR: ImagePickerResult = {
  code: "user_canceled",
  message: t`The user canceled the selection of an image`,
  tag: "error",
};

const CAMERA_UNAVAILABLE_ERROR: ImagePickerResult = {
  code: "camera_unavailable",
  message: t`Camera unavailable`,
  tag: "error",
};

const useImagePicker = () => {
  const [cameraPermissionStatus, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const [mediaLibraryPermissionStatus, mediaLibraryPermissions] =
    ImagePicker.useMediaLibraryPermissions();

  const getImageFromCamera = useCallback(
    async (
      options: ImagePicker.ImagePickerOptions
    ): Promise<ImagePickerResult> => {
      try {
        if (
          !cameraPermissionStatus?.granted &&
          cameraPermissionStatus?.canAskAgain
        ) {
          const result = await requestCameraPermission();
          if (!result.granted) return ACCESS_DENIED_ERROR;
        }

        const result = await ImagePicker.launchCameraAsync(options);

        if (result.canceled || !result.assets) {
          return USER_CANCELED_ERROR;
        }

        return { asset: result.assets[0], tag: "success" };
      } catch {
        return CAMERA_UNAVAILABLE_ERROR;
      }
    },
    [cameraPermissionStatus]
  );

  const getImageFromMediaLibrary = useCallback(
    async (
      options: ImagePicker.ImagePickerOptions
    ): Promise<ImagePickerResult> => {
      if (
        !mediaLibraryPermissionStatus?.granted &&
        mediaLibraryPermissionStatus?.canAskAgain
      ) {
        const result = await mediaLibraryPermissions();
        if (!result.granted) return ACCESS_DENIED_ERROR;
      }

      const result = await ImagePicker.launchImageLibraryAsync(options);

      if (result.canceled || !result.assets) {
        return USER_CANCELED_ERROR;
      }

      return { asset: result.assets[0], tag: "success" };
    },
    [mediaLibraryPermissionStatus]
  );

  const getImageFrom = useCallback(
    (
      source: "camera" | "media_library",
      options: ImagePicker.ImagePickerOptions
    ) => {
      switch (source) {
        case "camera":
          return getImageFromCamera(options);
        case "media_library":
          return getImageFromMediaLibrary(options);
      }
    },
    [getImageFromCamera, getImageFromMediaLibrary]
  );

  return { getImageFrom };
};

export default useImagePicker;
