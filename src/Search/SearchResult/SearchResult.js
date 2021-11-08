import React from 'react';
import Avatar from '../../common/Avatar/Avatar';
import './SearchResult.scss';
import { Link } from 'react-router-dom';

function SearchResult({ user }) {
    return (
        <div className="SearchResult">
            <Avatar />
            <Link to={'/profile/' + user.username}>
                {user.username}
            </Link>
        </div>
    );
}
export default SearchResult;