import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { descripcion, general } = styles;
const colorTexto = descripcion.colorTexto;
const fontSize = descripcion.fontSize;
const textTransform = descripcion.textTransform;
const fontWeigth = descripcion.fontWeigth;

const DescripcionContainer = styled.div`
    color: ${colorTexto};
    font-size: ${fontSize};
    text-transform: ${textTransform};
`

const P = styled.p`
    font-weight: ${fontWeigth};
`

function Descripcion({ text }) {
    const lineas = text.split('\n').map((linea, index, array) => (
        <React.Fragment key={index}>
          {linea}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));

    if (text !== "" ) {
        return (
            
            <DescripcionContainer>
                <P>{lineas}</P>
            </DescripcionContainer>
        );
    } else {
        return null;
    }   


}

export default Descripcion;