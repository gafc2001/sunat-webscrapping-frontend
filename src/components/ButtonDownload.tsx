import { faDownload, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core"
import { exportData } from "../services";
import { useState } from "react";

interface ButtonDownloadProps {
    text : string,
    data : any[]
}
export const ButtonDownload : React.FC<ButtonDownloadProps>= ({text = "Descargar",data}) => {
 

    const [loading, setLoading] = useState<boolean>(false);
    const handleClick = async() => {
        setLoading(true);
        await exportData("data.xlsx",data);
        setLoading(false);
    }

    return <Button onClick={handleClick} style={{marginBottom: "1rem"}} disabled={loading}>
        <FontAwesomeIcon icon={faDownload} style={{marginRight : ".4rem"}}/>
        {text}
        {loading && <FontAwesomeIcon style={{marginLeft : "5px"}} icon={faRotate} spin={true} />}
    </Button>
}