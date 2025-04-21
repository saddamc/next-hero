
// export const metadata = {
//     title: "Post Details",
//     description: "This is from post details",
//   };

export const generateMetadata = async ({params}) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()
    return {
        title: {
            absolute: `${postData.title}`,
        },
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    console.log(data)
    return data;
}
const PostDetailsPage = async ({params}) => {
    const {title, body} = await getDetailsPost(params.id)
    return (
        <div>
            <h6 className="font-bold text-cyan-500" ><span className="font-bold text-red-400">Title: </span> {title}</h6>
            <h6> <span className="font-bold">Description:</span> {body}</h6>
        </div>
    );
};

export default PostDetailsPage;