import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../App';
import { postLike, postUnlike } from '../../../services/post.service';
import './PostLike.scss';

function PostLike({ postId, likes }) {

    const { user } = useContext(UserContext);
    const [likesCount, setLikesCount] = useState(likes.length);
    const [hasLiked, setHasLiked] = useState(likes.includes(user._id));

    useEffect(() => {
		setHasLiked(likes.includes(user._id))
	}, [user, likes]);

    function like() {
        setHasLiked(true);
        setLikesCount(prev => prev + 1);
        postLike(postId).catch(() => setHasLiked(false));
    }

    function unlike() {
        setHasLiked(false);
        setLikesCount(prev => prev - 1);
        postUnlike(postId).catch(() => setHasLiked(true));
    }

    return (
        <div>
            {hasLiked
                ? <button onClick={unlike}>Unlike</button>
                : <button onClick={like}>Like</button>}
            <span>{likesCount} Likes</span>
        </div>
    );
}

export default PostLike;