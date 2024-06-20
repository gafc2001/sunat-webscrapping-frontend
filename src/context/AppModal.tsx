import { Modal } from "@mantine/core";
import React, { ReactNode, useContext, useState } from "react";

interface ModalType {
    modal : ({
        title,
        body,
        size,
    }: ModalProps) => void,
    closeModal : () => void,
    openModal : () => void
}

interface ModalProps{
    title : ReactNode,
    body : ReactNode,
    size : string,
}
const ModalContext = React.createContext<ModalType | null>(null);

export const ModalProvider : React.FC<{children: React.ReactNode}> = ({children}) => {

    const [opened,setOpened] = useState<boolean>(false);

    const [elementsModal,setElementsModal] = useState<ModalProps>({
        title : "",
        body : "",
        size : "md",
    });

    const modal = ({
        title,
        body,
        size = "md",
    }: ModalProps) => {
        setElementsModal({
            title : title,
            body : body,
            size : size,
        });
    }
    const closeModal = () => setOpened(false);
    const openModal = () => setOpened(true);

    return (
        <>
        <ModalContext.Provider value={{
            modal,
            closeModal,
            openModal
        }}>
            {children}
        </ModalContext.Provider>
        <Modal opened={opened} onClose={closeModal} size={elementsModal.size} title={elementsModal.title}>
            {elementsModal.body}
        </Modal>
        </>
    )

}

export const useModal = () => useContext(ModalContext) as ModalType;