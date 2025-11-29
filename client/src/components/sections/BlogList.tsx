import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

export const BlogList = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Our Experiences and Insights
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Expert insights on mutual funds, investment strategies, and financial planning
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                        >
                            {/* Card Content */}
                            <div className="p-8">
                                {/* Title */}
                                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>

                                {/* Description */}
                                <p className="text-slate-600 mb-6 line-clamp-2">
                                    {post.description}
                                </p>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Read More Link */}
                                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                    <span>Read Article</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
