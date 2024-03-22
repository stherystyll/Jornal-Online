'use client';
import CardNoticia from "../CardNoticia";
import './style.css';
import { truncateWithEllipses } from "@/libs/truncateWithEllipses";


export const LateralDireito = ({ noticias }) => {
    const noticiasComElipse = () => {
        return noticias.map((noticia, index) => {
            noticia.texto = truncateWithEllipses(noticia.texto, 100)
            return (
                <div style={{ marginBottom: '20px' }}  key={ index } >
                     <CardNoticia  noticia={noticia} />
                </div>
            )
        })
    }   
    return (
        <div className="ultimasNoticias" >
            <div className="titulo" >ÚLTIMAS NOTÍCIAS</div>
            <div style={{ marginBottom: '20px' }} >
                {noticias.length && noticiasComElipse()}
            </div>
        </div>
    )
}

export default LateralDireito;