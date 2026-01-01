import { OptimizedImage } from "@/components/common/optimized-image";
import { Link } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  thumbnail: string;
}

const blogs: Blog[] = [
  {
    id: "1",
    title: "Is InboxDollars Legit?",
    description:
      "Discover if InboxDollars is a legit platform to make money online. Read our in-depth review covering payouts, tasks, and real user experiences in 2026.",
    author: "Ashutosh Ranjan",
    date: "December 29, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1639753516974-0f3f333a4e31?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Is Apex Focus Group Legit or a Scam? Honest Review",
    description:
      "Is Apex Focus Group legit or a scam? Learn how it works, payment proofs, red flags, and whether it's worth your time in 2026.",
    author: "Khushi Saluja",
    date: "December 29, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1593113598332-cd0df018674b?w=800&h=400&fit=crop", // Woman thinking
  },
  {
    id: "3",
    title: "Best Music Streaming Services You Need to Try in 2026",
    description:
      "Looking for the best music streaming service? Discover 10 top platforms with exclusive features, sound quality, pricing, and which one suits you best.",
    author: "Ashutosh Ranjan",
    date: "December 29, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&h=400&fit=crop",
  },
];

export const LatestBlogsSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Latest Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <article
              key={blog.id}
              className="bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-60 overflow-hidden bg-gradient-to-r from-purple-600 to-orange-500">
                <OptimizedImage
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-1">
                  {blog.description}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary flex items-center justify-center text-white font-bold text-sm">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {blog.author}
                    </p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
