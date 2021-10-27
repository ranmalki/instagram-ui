import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo() {
	return (
		<div className="Logo">
			<Link to={'/'}>
				Instagram
			</Link>
		</div>
	);
}

export default Logo;