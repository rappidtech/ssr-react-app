import React from 'react';
import iconMap from '../iconMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { redes } = styles;
const colorPrincipal = redes.colorPrincipal;
const colorHover = redes.colorHover;
const padding = redes.padding;
const margin = redes.margin;
const colorIconSVG = redes.colorIconSVG;

const UlSocial = styled.ul`
    margin: ${margin};
    padding: ${padding};
    display: flex;
    justify-content: center;
`
const LiSocial = styled.li`
    list-style: none;
`
const ASocial = styled.a`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    margin: 0 0px;
    background-color: ${colorPrincipal};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-decoration: none;

    &:hover {
        background-color: ${colorHover};
        color: white;
    }
`

const IconSocial =  styled(FontAwesomeIcon)`
    text-decoration: none;
    font-size: 1.5rem;
    color: ${colorIconSVG}
`


function Redes({ redes }) {
    return (
        <>
            <UlSocial>
                {redes.filter(red => red.render === "si").map((red, index) => 
                    {
                        return (
                            <LiSocial>
                                <ASocial target='blank' href={red.url}>
                                    {red.iconImg ? (
                                    <img src={red.iconImg} alt={red.nombre} style={{ marginRight: '10px' }} />
                                    ) : (
                                        <IconSocial icon={iconMap[red.icon]} />
                                    )}
                                </ASocial>
                            </LiSocial>
                        )
                    }
                )}
            </UlSocial>
        </>
    );
}

export default Redes;