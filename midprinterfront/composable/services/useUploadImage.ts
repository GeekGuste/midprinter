import { Ref } from "vue";

interface IUseploadImage {
  upload: (file: any, onUploadProgress: any) => void;
  uploadedImage: Ref<string>;
}

const UPLOAD_IMAGE_BASE_URL = "";

export function useUploadImage(): IUseploadImage {
  const uploadedImage: Ref<string> = ref("");

  const upload = async (file: any, onUploadProgress: any) => {
    let formData = new FormData();

    formData.append("image", file);

    const { data: url } = await useFetch(`${UPLOAD_IMAGE_BASE_URL}/imagine`, {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    uploadedImage.value = url.value as string;
  };

  return { upload, uploadedImage };
}
