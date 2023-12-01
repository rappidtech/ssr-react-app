import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const headerBackground = styles.general.headerBackground
const headerBackgroundSize = styles.general.headerBackgroundSize
const headerBackgroundPosition = styles.general.headerBackgroundPosition
const headerBackgroundRepeat = styles.general.headerBackgroundRepeat
const headerHeight = styles.general.headerHeight
const headerWidth = styles.general.headerWidth
const headerPosition = styles.general.headerPosition

const Background = styled.div`
    position: ${headerPosition};
    top: 0;
    left: 0;
    background-image: ${headerBackground};
    background-size: ${headerBackgroundSize};
    background-position:  ${headerBackgroundPosition};
    background-repeat: ${headerBackgroundRepeat};
    height:  ${headerHeight};
    width:  ${headerWidth};
    z-index: 0;

`


function HeaderBackground() {
    return (
        <>
            <Background className="header-background">
                
            </Background>   
        </>
    )
}

export default HeaderBackground