import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

function Avatar({image, size}) {
	return (
		<div className={`Avatar ${size || 'sm'}`}>
			<img src={image || "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" className="Avatar__image" />
		</div>
	);
}

Avatar.propTypes = {
	image: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Avatar;