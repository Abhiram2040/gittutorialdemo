const Posts = [
    { title: 'Post One' , body: 'This is post one', CreatedAt: new Date().getTime()},
    { title: 'Post Two' , body: 'This is post two', CreatedAt: new Date().getTime()}
];
let intervalId = 0 ;

function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
        let output = '';
        for(let i=0; i<Posts.length; i++){
            output +=`<li>${Posts[i].title} - last updated${(new Date().getTime() - Posts[i].CreatedAt )/1000} seconds ago</li>`;
        };
        console.log('timer running id = ', intervalId)
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        Posts.push({ ...post, CreatedAt: new Date().getTime()});
        callback()
    },2000);
}

function create4thPost(post, callback){
    setTimeout(()=>{
        Posts.push({ ...post, CreatedAt: new Date().getTime()})
        callback()
    },6000);
}


createPost({title: 'Post Three' , body: 'This is post three'}, getPosts);

create4thPost({title: 'Post Four' , body: 'This is post four'}, getPosts)

var timer;
var count = 0
function lastEditedInSecondsAgo(){
    count = 0;
    clearInterval(timer)
    timer = setInterval(()=>{
        count++;
        console.log(count);
    },5000);
}