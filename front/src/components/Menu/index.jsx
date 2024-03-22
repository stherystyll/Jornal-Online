'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMugHot, faXmark } from '@fortawesome/free-solid-svg-icons'

import './style.css'

export const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false)
    const router = useRouter()

    return (
        <>
            <nav className='menu'>
                <button onClick={() => setMenuLateral(!menuLateral)} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faBars} size="2x" color="#333" />
                </button>
                <div className='logoContanier' >
                    <FontAwesomeIcon icon={faMugHot} size="2x" />
                    <div className='marca' >Logo</div>

                </div>
                <button className='login' onClick={() => router.push('/login')} >Login</button>
            </nav>

            {menuLateral &&
                <div className='menuLateral' >
                    <div className='fechar' onClick={() => setMenuLateral(!menuLateral)}>
                        <FontAwesomeIcon icon={faXmark} size="2x" color='#fccd07' />
                    </div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/noticias/produto">Produto</a></li>
                        <li><a href="/noticias/tecnologia">Tecnologia</a></li>
                        <li><a href="/noticias/rh">RH</a></li>
                        <li><a href="/noticias/vendas">Vendas</a></li>
                    </ul>
                </div>}
        </>
    )
}

export default Menu;