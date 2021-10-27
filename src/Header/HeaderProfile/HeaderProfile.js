import React, { useContext } from 'react';
import './HeaderProfile.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

function HeaderProfile() {
	const { user } = useContext(UserContext);

	return (
		<Link to={`/profile/${user.username}`} >
			<div className="HeaderProfile">
				<Avatar image={user.image} />
				<span className="HeaderProfile__username">{user.username}</span>
			</div>
		</Link>
	);
}

export default HeaderProfile;