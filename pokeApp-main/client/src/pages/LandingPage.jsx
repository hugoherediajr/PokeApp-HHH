import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/LandingPage.module.css";

const LandingPage = () => {
	return (
		<div className={style.landingContainer}>
			<div className={style.infoContainer}>
				<h1>Bievenidos a la Pokedex</h1>
				<Link className={style.landingButton} to='/home'>
					Ingresar
				</Link>
				<p>Hecho con mucho <span>&#129304;&#127995;</span> por Héctor Hugo Heredia</p>
			</div>
		</div>
	);
};

export default LandingPage;
