const Posts = [
    { title: 'Post One' , body: 'This is post one'},
    { title: 'Post Two' , body: 'This is post two'}
];

function getPosts() {
    setTimeout(()=>{
        let output = '';
        Posts.forEach((post, index)=>{
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something Went Wrong');
            }
        },2000);
    });
}

function deletePost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Posts.pop(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Array is empty now');
            }
        },4000);
    });
}

function delete2ndPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Posts.pop(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Array is empty now');
            }
        },6000);
    });
}

function delete1stPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Posts.pop(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Array is empty now');
            }
        },8000);
    });
}

createPost({ title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));


deletePost({ title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(err=>console.log(err));

delete2ndPost({ title: 'Post Two', body: 'This is post two'})
    .then(getPosts)
    .catch(err=>console.log(err));

delete1stPost({ title: 'Post one', body: 'This is post one'})
    .then(getPosts)
    .catch(err=>console.log(err));


//promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>
    setTimeout(resolve, 2000, 'Goodbye')
);

Promise.all([promise1, promise2, promise3]).then(values=>console.log(values));