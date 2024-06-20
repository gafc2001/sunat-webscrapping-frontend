import { Modal } from "@mantine/core"
import { useState } from "react"

export const ModalApp = () => {

    const [opened,setOpened] = useState<boolean>(false);

    const handleClose = () => setOpened(false);

    return (
        <Modal opened={opened} onClose={handleClose} size="auto" title="Modal size auto">
            
        </Modal>
    )
}
