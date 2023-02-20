import React from 'react';
import chekImage from '../image/chek.svg';
import './Post.css';



const Post = (props) => {
    return (
        <div className='post'>
            <div className='post-header'>
                <div className='header-avatar'>
                    <img src={props.author.photo} alt="photo"/>
                </div>
                <div className='header-name'>{props.author.name}</div>
                <img className='icons' src={chekImage} alt="chek"/>
                <div className='header-nickname'>{props.author.nickname}</div>
                <div className='header-date'>{props.date}</div>
            </div>
            <p>{props.content}</p>
            <div className='post-image'><img src={props.image} alt="{props.content}"/></div>
        </div>
    );
};

export default Post;