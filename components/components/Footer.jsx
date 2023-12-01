import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { footer } = styles;
const colorTexto = footer.colorTexto;

const PContainer = styled.p`
	color: ${colorTexto};
	margin: 0;
`

const AFooter = styled.a`
	color: ${colorTexto};
	text-decoration: none;
	text-decoration: underline;
	margin-left: 5px;
`

function Footer(data) {
	return (
		<>
			{data.poweredBy !== '' ? (
				<div className="powered-by">
					<PContainer>
						Powered by    
					</PContainer>
					<AFooter className='a-footer' href={data.link}>    
						{data.poweredBy} 
					</AFooter>
				</div>
			) : (
				<></>
			)}
		</>
		);
}



export default Footer;
