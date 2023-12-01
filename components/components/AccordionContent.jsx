import React from 'react';
import { Carousel } from 'react-bootstrap';
import data from '../edits/data.json';
import styles from '../edits/styles.json';
import styled from 'styled-components';

const { carrusel, enlaces } = styles;

const imgStyle = {
    height: carrusel.height,
    width: carrusel.width,
    borderRadius: '5px',
};

const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    color: ${enlaces.colorTexto};
    margin-left: 10px;
    text-align: left;
`

const Title = styled.h3`
    font-size: 1.5rem;
`

const Description = styled.p`
    font-size: 0.8rem;
`



const AccordionContent = ({ item }) => {
    return (
        <>
            <Carousel indicators={false} prevIcon={null} nextIcon={null}>
                {item.img.map((img, index) => (
                    <Carousel.Item key={index} interval={2000}>
                        <div style={itemStyle}>
                            <img
                                style={imgStyle}
                                src={img}
                                alt={item.titulo[index]}
                            />
                            {item.titulo[index] !== '' ? 
                            <TextContainer>
                                <Title>{item.titulo[index]}</Title>
                                <Description>{item.descripcion[index]}</Description>
                            </TextContainer>
                            : null}        
                                
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};


export default AccordionContent;
