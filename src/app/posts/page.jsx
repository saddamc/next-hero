// import { getPosts } from "@/services/postApi";
import Link from "next/link";

export const metadata = {
    title: "Posts",
    description: "Posts Page",
  };

  export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    // if(data) {
    //     redirect(`/posts/${data[0].id}`)  
    //     // -- redirect from next/navigation --
    // }
    return data;
}

const PostPage = async () => {
    const postsData = await getPosts()

    return (
        <div className="">
            <h6>All Posts</h6>
            <div className="grid grid-cols-4 gap-6">
                {
                    postsData?.slice(0, 20)?.map(({title, body, id}) => (
                         <div key={id} className="border-2 p-6">
                            <h6 className="font-bold text-cyan-500 uppercase" >{title}</h6>
                            <h6> <span className="font-bold">Description:</span> {body}</h6>
                            <button className="bg-red-400 py-2 px-4  "> <Link href={`/posts/${id}`}>See Details</Link> </button>
                         </div>   
                        ))
                }
            </div>
        </div>
    );
};

export default PostPage;