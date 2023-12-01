import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { titulo, general } = styles;
const margin = titulo.margin;
const colorTexto = titulo.colorTexto;
const fontSize = titulo.fontSize;
const textTransform = titulo.textTransform;

const TituloContainer = styled.div`
    margin: ${margin};
    color: ${colorTexto};
    text-transform: ${textTransform};
    `
    
const TituloText = styled.h1`
    font-size: ${fontSize};
    margin: 0 0 0 0;};
`

function Titulo({ text }) {
    return (
        <TituloContainer>
            <TituloText>{text}</TituloText>
        </TituloContainer>
    );
}

export default Titulo;