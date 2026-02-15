import { AxiosClient } from "@/shared/api";

export const uploadOrderFile = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await AxiosClient.post<{ url: string }>(
    "/profile/client/orders/upload-file",
    formData,
  );
  return response.data;
};
