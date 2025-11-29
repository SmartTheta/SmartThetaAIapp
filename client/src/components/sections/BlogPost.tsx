import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

export const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Blog</span>
                </Link>

                {/* Article Header */}
                <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-8 lg:p-12">
                        {/* Title */}
                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            {post.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-slate-600 mb-6">
                            {post.description}
                        </p>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-8 border-b border-slate-100">
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

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none mt-8">
                            {/* Introduction */}
                            <p className="text-slate-700 leading-relaxed mb-8">
                                {post.content.introduction}
                            </p>

                            {/* Sections */}
                            {post.content.sections.map((section, index) => (
                                <div key={index} className="mb-8">
                                    {section.title && (
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                            {section.title}
                                        </h2>
                                    )}

                                    {section.content && (
                                        <div
                                            className="text-slate-700 leading-relaxed mb-4 whitespace-pre-line"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    )}

                                    {section.list && (
                                        <ul className="space-y-3 mb-4">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                                    <span
                                                        className="text-slate-700 leading-relaxed"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                        }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.image && (
                                        <div className="my-6">
                                            <img
                                                src={section.image}
                                                alt="Chart illustration"
                                                className="w-full rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Conclusion */}
                            {post.content.conclusion && (
                                <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        Take Away
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        {post.content.conclusion}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </article>

                {/* Back to Blog Link */}
                <div className="mt-8 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Articles</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
