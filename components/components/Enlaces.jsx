import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconMap from '../iconMap'
import styled from 'styled-components';
import styles from '../edits/styles.json';
import { useState } from 'react';
import AccordionButton from './Accordion.jsx';
import data from '../edits/data.json';

const { enlaces, general } = styles;

const colorFondo = enlaces.colorFondo;
const colorTexto = enlaces.colorTexto;
const colorHover = enlaces.colorHover;
const borderRadius = enlaces.borderRadius;
const colorIcon = enlaces.colorIcon;
const fontSize = enlaces.fontSize;
const fontWeigth = enlaces.fontWeigth;
const textTransform = enlaces.textTransform;
const scaleLink = enlaces.scaleLink;
const margin = enlaces.margin;
const padding = enlaces.padding;
const border = enlaces.border;
const colorActive = enlaces.colorActive;
const justifyContent = enlaces.justifyContent;
const widthMD = enlaces.widthMD;
const widthSM = enlaces.widthSM;
const leftIcon = enlaces.leftIcon;
const rightIcon = enlaces.rightIcon;

const EnlacesListItem = styled.li
`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Enlace = styled.a`
	flex-grow: 1;
	width: ${widthMD};
	padding: ${padding};
	margin: ${margin};
	background-color: ${colorFondo};
	color: ${colorTexto};
	font-weight: ${fontWeigth};
	text-align: center;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: ${justifyContent};
	
	border-radius: ${borderRadius};
	border: ${border};	
	text-transform: ${textTransform};
	transform: scale(1);
  	transition: transform 0.3s ease;
	box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
	cursor: pointer;

	&:hover {
		background-color: ${colorHover};
		transform: ${scaleLink};
	}

	&:active {
		background-color: ${colorActive};
	}
	@media (max-width: 768px) {
		width: ${widthSM};
	}
`;

const Icono = styled(FontAwesomeIcon)`
	margin-right: 10px;
	color: ${colorIcon};
	font-size: ${fontSize};
`;

const arrow = "./img/svg/arrow.svg";

function Enlaces(links) {
	
	const accordionLinks = links.links.filter(link => link.render === 'si' && link.accordion === 'si');
    const regularLinks = links.links.filter(link => link.render === 'si' && link.accordion !== 'si');

    return (
		(	<>
				<ListGroup>
					<AccordionButton links={accordionLinks}>
						{accordionLinks.map((link, index) => (
							<EnlacesListItem key={index}>
							</EnlacesListItem>
						))}		
					</AccordionButton>		
					{regularLinks.map((link, index) => (
						<EnlacesListItem key={index}>
							<Enlace href={link.url} target='blank' >
								{link.iconImg ? (
									<img className={leftIcon} src={link.iconImg} alt={link.nombre} style={{ marginRight: '50px' }} />
									) : (
										<Icono className={leftIcon} icon={iconMap[link.icon]} />
										)}								
								{link.nombre}
								<Icono style="" className={rightIcon} icon={iconMap[link.icon]} />							
							</Enlace>
						</EnlacesListItem>
							
					))} 
				</ListGroup>
			</>
		  ));
    ;
  }
  
//   function Enlaces({ links }) {
//     return (
      
//         {generateLi(links)}
      
//     );
//   }

export default Enlaces;
