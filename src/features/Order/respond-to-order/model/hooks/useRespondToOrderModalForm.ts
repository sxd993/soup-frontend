"use client";

import { useState } from "react";
import { useRespondToOrder } from "./useRespondToOrder";
import { useRespondToOrderModalStore } from "../store/useRespondToOrderModalStore";

const parseNumber = (value: string): number | undefined => {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const numeric = Number(trimmed);
  return Number.isFinite(numeric) ? numeric : undefined;
};

export const useRespondToOrderModalForm = (orderId: number) => {
  const { isOpen, isSuccess, reset, showSuccess } = useRespondToOrderModalStore();
  const { submitRespond, isRespondPending } = useRespondToOrder(orderId);

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [message, setMessage] = useState("");

  const clearFields = () => {
    setPriceFrom("");
    setPriceTo("");
    setMessage("");
  };

  const handleClose = () => {
    clearFields();
    reset();
  };

  const handleSubmit = async () => {
    const result = await submitRespond({
      priceFrom: parseNumber(priceFrom),
      priceTo: parseNumber(priceTo),
      message: message.trim() || undefined,
    });

    if (result === "success" || result === "already") {
      showSuccess();
    }
  };

  const handleResetAndClose = () => {
    clearFields();
    reset();
  };

  return {
    isOpen,
    isSuccess,
    isRespondPending,
    priceFrom,
    priceTo,
    message,
    setPriceFrom,
    setPriceTo,
    setMessage,
    handleClose,
    handleSubmit,
    handleResetAndClose,
  };
};

