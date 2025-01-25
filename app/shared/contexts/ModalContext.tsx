import { createContext, useContext, ReactNode, useState } from "react";
import { ActivityTypes, TouristAttraction } from "@app/shared/data/allData";
import AttractionModal from "@app/components/molecules/AttractionModal/AttractionModal";

type ModalContent = {
  type: "attraction" | "activity";
  data: TouristAttraction | ActivityTypes | null;
};

interface ModalContextType {
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <AttractionModal
          data={modalContent.data}
          type={modalContent.type}
          onClose={closeModal}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
