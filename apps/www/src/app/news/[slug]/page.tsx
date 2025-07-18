"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";
import { useParams } from "next/navigation";
import { Ban } from "lucide-react";
//import { Highlight } from "@/ui/highlight"; // Assuming you have a syntax highlighter
import blogPosts from "@/data/blog-posts.json";
import BlogSlugHero from "./BlogSlugHero";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-yellow-400/20 text-yellow-600 p-4 rounded-full mb-6">
          <Ban className="w-10 h-10" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#111e4f] mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 max-w-md">
          Sorry, the article you&apos;re looking for doesn&apos;t exist or has
          been removed.
        </p>
        <Link
          href="/news"
          className="mt-6 inline-flex items-center px-5 py-2.5 bg-[#111e4f] text-white rounded-lg hover:bg-[#0e193c] transition"
        >
          Back to News
        </Link>
      </motion.div>
    );
  }

  const relatedPosts = blogPosts.filter((p) =>
    post.relatedPosts.includes(p.id)
  );

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <BlogSlugHero post={post} />

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="mb-6 text-gray-700 leading-relaxed"
                    >
                      {section.text}
                    </motion.p>
                  );

                case "heading":
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="text-2xl font-bold mt-12 mb-6 text-[#094a94]"
                    >
                      {section.text}
                    </motion.h2>
                  );

                case "quote":
                  return (
                    <motion.blockquote
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="border-l-4 border-[#e0c9a4] pl-6 my-8 italic text-gray-600"
                    >
                      <p className="text-xl">&quot;{section.text}&quot;</p>
                      {"author" in section && section.author && (
                        <footer className="mt-2 not-italic font-medium text-[#094a94]">
                          — {section.author}
                        </footer>
                      )}
                    </motion.blockquote>
                  );

                case "bullets":
                  return (
                    <motion.ul
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="list-disc pl-6 mb-6 space-y-2"
                    >
                      {Array.isArray((section as { items?: string[] }).items) &&
                        (section as { items: string[] }).items.map((item, i) => (
                          <li key={i} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                    </motion.ul>
                  );

                case "table":
                  if (!("rows" in section) || !Array.isArray(section.rows))
                    return null;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="my-8 overflow-x-auto"
                    >
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {/* {section.rows[0]?.map((header, i) => (
                              <th
                                key={i}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                {header}
                              </th>
                            ))} */}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {section.rows.slice(1).map((row, i) => (
                            <tr key={i}>
                              {/* {row.map((cell, j) => (
                                <td
                                  key={j}
                                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                                >
                                  {cell}
                                </td>
                              ))} */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>
                  );

                default:
                  return null;
              }
            })}
          </div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-[#094a94]"
            >
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="h-48 relative">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-[#e0c9a4] bg-opacity-20 text-[#094a94] text-xs px-2 py-1 rounded-full font-semibold">
                          {relatedPost.category}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="flex items-center text-xs text-gray-500">
                          <FiClock className="mr-1" /> {relatedPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 hover:text-[#094a94] transition mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <FiCalendar className="mr-1" /> {relatedPost.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
