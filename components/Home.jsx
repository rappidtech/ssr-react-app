import React from "react";
import Logo from './components/Logo.jsx';
import Enlaces from './components/Enlaces.jsx';
import Footer from './components/Footer.jsx';
import Subtitulo from './components/Subtitulo.jsx';
import Descripcion from './components/Descripcion.jsx';
import Titulo from './components/Titulo.jsx';
import Redes from './components/Redes.jsx';
import BotonCompartir from './components/Compartir.jsx';
import TarjetaCompartir from './components/MenuCompartir.jsx';
import ContactBanner from './components/ContactBanner.jsx';
import HeaderBackground from './components/HeaderBackground.jsx';
import data from './edits/data.json';
import styled from 'styled-components';
import styles from './edits/styles.json';
import { useState } from "react";


const { general, footer } = styles;
const fondoApp = general.backgroundColor;
const fondoFooter = footer.backgroundColor;
const height = footer.height


const AppContainer = styled.div`
    background: ${fondoApp};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const FooterContainer = styled.footer`
    background-color: ${fondoFooter};
    display: flex;
    width: 100%;
    flex-direction: column;
    height: ${height};
    align-items: center;
    justify-content: center;
`

const Main = styled.main`
    margin: -20px 0 12px 0;
`

export default function Home() {
	const [counter, set] = React.useState(0);

	const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

    const toggleTarjeta = () => {
        setMostrarTarjeta(!mostrarTarjeta);
    };

  return (
    <>
		<TarjetaCompartir mostrar={mostrarTarjeta} onCerrar={toggleTarjeta} />
		<AppContainer className="App">
			<HeaderBackground/> 
			
			<div>
				<BotonCompartir onToggle={toggleTarjeta} />
			</div>
			<div>
				<ContactBanner/>
			</div>
			
			
			<header className="App-header">
				<Logo src={data.logo} link={data.enlacePrincipal}/>
				<Titulo text={data.titulo}/>
				<Subtitulo text={data.subtitulo}/>
			</header>
				<Descripcion text={data.descripcion}></Descripcion>
				<Redes redes={data.redes} />
			<Main>
				<Enlaces links={data.enlaces} />  
			</Main>
			<FooterContainer>
				<Footer poweredBy={data.poweredBy} link={data.enlaceRappid}/>
			</FooterContainer>
		</AppContainer> 
	</>
  );
}