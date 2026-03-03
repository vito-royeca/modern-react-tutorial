import { useState } from 'react';

import type { Route } from "./+types/index";
import type { IPost } from "./IPost";
import PostCard from "./components/PostCard";
import PostFilter from './components/PostFilter';
import Pagination from '../../projects/portfolio/components/Pagination';

export function meta({}: Route.MetaArgs) {
    return [
        { 
            title: "Blog - Modern React From the Beginning"
        }, 
        { 
            name: "description",
            content: "Blog posts for Modern React From the Beginning"
      },
  ];
}

export async function loader({ request }: Promise<Route.LoaderArgs>): Promise<{posts: IPost[]}> {
    const url = new URL('/posts-meta.json', request.url);
    const response = await fetch(url.href);

    if (!response.ok) {
        throw new Response('Failed to load posts metadata', { status: response.status });
    }

    const data = await response.json();
    data.sort((a: IPost, b: IPost) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
    const postsPerPage = 3;
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { posts } = loaderData;
    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
        );
    })

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

    return ( 
        <>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                Blog
            </h2>

            <PostFilter
                searchQuery={ searchQuery }
                onSearchChange={(query) => {
                    setSearchQuery(query);
                    setCurrentPage(1);
                }}
            />
            <div className="space-y-8">
                {currentPosts.length === 0 ? (
                    <p className="text-gray-400 text-center">
                        No posts found.
                    </p>
                ) : currentPosts.map((post: IPost) => (
                    <PostCard 
                        key={post.slug}
                        post={post} />
                ))}
            </div>
            {}

            <Pagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
}
 
export default BlogPage;