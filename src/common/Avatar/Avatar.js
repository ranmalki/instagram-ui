import React from 'react';
import './Avatar.scss';

function Avatar({image, size}) {
	return (
		<div className={`Avatar ${size || 'md'}`}>
			<img src={image || "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" className="Avatar__image" />
		</div>
	);
}

export default Avatar;