import {posts} from './db.js';

posts.forEach(post => {
    console.log(post);
});

console.clear();

const filterposts = posts.filter((post) =>{
    return post.userId === 5;
});

console.log(filterposts);

const postmap = filterposts.map((post)=>{
    return post.id;
});

console.log(postmap);