import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const BusquedasRecientes = () => {
    return <div>
        <h2>Ultimas búsqueda</h2>
            <div>
                <div className="history-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className="info">
                        <strong>Konecta</strong>
                        <span>Ruc: 1111111111</span>
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
            </div>
    </div>
}