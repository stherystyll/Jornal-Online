'use client';
import CardNoticia from "../CardNoticia";
import './style.css';
import {truncateWithEllipses} from "@/libs/truncateWithEllipses";

export const LateralEsquerdo = ({ noticia }) => {
    

    noticia.texto = truncateWithEllipses(noticia.texto, 100)

    return (
        <div className="maisPopular" >
            <div className="titulo" >MAIS POPULAR</div>
            <CardNoticia noticia={noticia} temHover={true}/>
        </div>
    )
}

export default LateralEsquerdo;