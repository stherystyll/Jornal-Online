'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import Noticia from "@/components/Noticia";
import LateralEsquerdo from "@/components/LateralEsquerdo";
import LateralDireito from "@/components/LateralDireito";
import './style.css';

const HomePage = () => {
    const [noticias, setNoticias] = useState([]);

    const getNoticias = async () => {
        try {
            const result = await axios.get('http://localhost:8080/noticias');
            setNoticias(result.data);
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const getNoticiaMaisPopular = () => {
        if (noticias) {
            return noticias.find(noticia => noticia.isPopular)
        }
    }

    const getUltimasNoticias = () => {
        if (noticias) {
            return noticias.filter(noticia => noticia.isUltimas)
        }
    }

    useEffect(() => {
        getNoticias();
    }, []);
    return (
        <div className="gridHome">
            { getNoticiaMaisPopular() && <LateralEsquerdo noticia={getNoticiaMaisPopular()} />}
            <div>
                {noticias.map(noticia =>
                    <Noticia key={noticia.id} noticia={noticia} />)
                }
            </div>
            {getUltimasNoticias() && <LateralDireito noticias={getUltimasNoticias()} />}
        </div>
    );
}

export default HomePage;