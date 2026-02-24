import type { Route } from "./+types/index";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

import type { IPost } from "./IPost";

export async function loader({ request }: Promise<Route.LoaderArgs>): Promise<{posts: IPost[]}> {
    const url = new URL('/posts-meta.json', request.url);
    const response = await fetch(url.href);

    if (!response.ok) {
        throw new Response('Failed to load posts metadata', { status: response.status });
    }

    const data = await response.json();
    return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
    const { posts } = loaderData;

    return ( 
        <>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                Blog
            </h2>
            {posts.map((post: IPost) => (
                <article
                    key={post.slug}
                    className="bg-gray-800 p-6 rounded-lg shadow mb-4"
                >
                    <h3 className="text-2xl font-semibold text-blue-400">
                        { post.title }
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{ new Date(post.date).toLocaleDateString()}</p>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-300 text-sm hover:underline"
                    >
                        Read more <FaArrowRight className="fa" />
                    </Link>    
                </article>
            ))}
        </>
    );
}
 
export default BlogPage;