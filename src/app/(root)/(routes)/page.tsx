"use client";

import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const RootPage = () => {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default RootPage;
