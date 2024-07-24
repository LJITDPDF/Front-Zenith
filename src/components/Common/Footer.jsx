import React from 'react'
import styled from 'styled-components'


const FooterContainer = styled.div`
    width: 80vw;
    height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 0 32px;
    gap: 16px;
    border-top: 2px solid #c3c3c3;
    background-color: white;
    p{
        color: #797979;
        font-weight: bold;
    }

`
const Footer = () => {
    return (
        <FooterContainer><p>Todos os direitos reservados © 2024 - DPDF</p></FooterContainer>
    )
}

export default Footer