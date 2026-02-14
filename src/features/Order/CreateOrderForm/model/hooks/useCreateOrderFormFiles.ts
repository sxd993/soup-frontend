import { useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { CreateOrderFormValues } from "../types/types";

export const useCreateOrderFormFiles = () => {
  const { control, setValue } = useFormContext<CreateOrderFormValues>();
  const files = useWatch({ control, name: "files", defaultValue: null });

  const handleFilesChange = (added: File[], current: FileList | null) => {
    const prev = current ? Array.from(current) : [];
    const dt = new DataTransfer();
    [...prev, ...added].forEach((f) => dt.items.add(f));
    setValue("files", dt.files.length ? dt.files : null);
  };

  const removeFile = (indexToRemove: number) => {
    const list = Array.from(files ?? []);
    const next = list.filter((_, i) => i !== indexToRemove);
    const dt = new DataTransfer();
    next.forEach((f) => dt.items.add(f));
    setValue("files", dt.files.length ? dt.files : null);
  };

  const fileList = useMemo(() => Array.from(files ?? []), [files]);
  const photoEntries = useMemo(
    () => fileList.map((file, i) => ({ file, i })).filter(({ file }) => file.type.startsWith("image/")),
    [fileList]
  );
  const fileEntries = useMemo(
    () => fileList.map((file, i) => ({ file, i })).filter(({ file }) => !file.type.startsWith("image/")),
    [fileList]
  );

  return { control, handleFilesChange, photoEntries, fileEntries, removeFile };
};
