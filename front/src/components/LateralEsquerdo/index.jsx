'use client';
import CardNoticia from "../CardNoticia";
import './style.css';

function truncateWithEllipses(text, max) {
    return text.substr(0, max - 1) + (text.length > max ? '&hellip;' : '');
}

export const LateralEsquerdo = () => {
    const noticia = {
        img: 'https://thenews.waffle.com.br/_next/image?url=https%3A%2F%2Fwaffle-prod.s3.amazonaws.com%2Fapp%2Fuploads%2F2024%2F03%2F20173254%2F2000x1334.jpg&w=1920&q=75',
        titulo: 'Marca de cosméticos da Selena Gomez é avaliada em US$ 2 bilhões',
        texto: ` Mostrando que a sua fama — e fortuna — vai muito além de “Os Feiticeiros de Waverly Place”, Selena Gomez surpreendeu o mercado na avaliação de sua marca de cosméticos.
            Apontada como um dos “alvos de fusões e aquisições mais procurados para 2024”, a Rare Beauty foi avaliada em US$ 2 bilhões.
            Pra quem não conhece, Gomez lançou a marca em 2020, com foco em cosméticos líquidos e fáceis de usar. Um ano depois, a Rare Beauty viralizou no TikTok — e explodiu nas vendas.            
            🤑 E não é a primeira vez da Rainha da Disney nos negócios. Com 430 milhões de seguidores no Instagram, Selena Gomez sabe usar bem o seu público para promover seus projetos.
        `,
        createdAt: new Date()
    }

    noticia.texto = truncateWithEllipses(noticia.texto, 100)

    return (
        <div className="maisPopular" >
            <div className="titulo" >MAIS POPULAR</div>
            <CardNoticia noticia={noticia} />
        </div>
    )
}

export default LateralEsquerdo;