// import React from 'react';
// import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

// // Sample blog data (you can fetch from API or CMS later)
// const blogPosts = [
//   {
//     id: 1,
//     title: "Why East-Facing Homes Are Preferred in Vastu Shastra",
//     excerpt:
//       "Discover the benefits of east-facing properties according to ancient Vastu principles and how they align with modern living in Hyderabad's climate.",
//     author: "Vamsi Reddy",
//     date: "January 15, 2026",
//     readTime: "6 min read",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     category: "Vastu & Design",
//   },
//   {
//     id: 2,
//     title: "Top 7 Amenities Every Modern Clubhouse Should Have in 2026",
//     excerpt:
//       "From smart gyms to co-working spaces — explore the must-have features today's homebuyers expect in premium residential clubhouses.",
//     author: "Architecture Team",
//     date: "January 10, 2026",
//     readTime: "8 min read",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     category: "Lifestyle",
//   },
//   {
//     id: 3,
//     title: "Understanding RERA: What Every Homebuyer in Telangana Should Know",
//     excerpt:
//       "A simple guide to the Real Estate Regulatory Act — protections, rights, and red flags to watch out for before booking your dream home.",
//     author: "Legal Desk",
//     date: "December 28, 2025",
//     readTime: "7 min read",
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     category: "Legal & Finance",
//   },
// ];

// const Blogs = () => {
//   return (
//     <div className="w-full bg-gray-50 py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
//             Our Insights
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
//             Latest from the Blog
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Expert advice, market updates, and lifestyle tips for homebuyers and investors in Hyderabad
//           </p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <article
//               key={post.id}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-[4/3]">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
//                     {post.category}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
//                   {post.title}
//                 </h3>

//                 <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
//                   {post.excerpt}
//                 </p>

//                 {/* Meta */}
//                 <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4 mt-auto">
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-1.5">
//                       <User size={16} />
//                       <span>{post.author}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5">
//                       <Calendar size={16} />
//                       <span>{post.date}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <Clock size={16} />
//                     <span>{post.readTime}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Read More */}
//               <div className="px-6 pb-6">
//                 <button className="group inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
//                   Read Full Article
//                   <ArrowRight
//                     size={18}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-16">
//           <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
//             View All Blog Posts
//             <ArrowRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;



import React from "react";
import { ArrowRight } from "lucide-react";

const BlogsSection = () => {
  const gold = "#d1a32c";
  const navy = "#203370";

  const blogs = [
    {
      id: 1,
      title: "Top Benefits of Living in a Gated Community",
      desc: "Discover why modern families prefer gated communities — safety, amenities, privacy, and a healthier lifestyle.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    {
      id: 2,
      title: "How Smart Home Tech is Changing Real Estate",
      desc: "From automated lighting to security monitoring, explore how smart homes are reshaping modern living.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827",
    },
    {
      id: 3,
      title: "Why Investing in Real Estate is Always Smart",
      desc: "Learn why real estate remains one of the safest and most profitable long-term investment strategies and how to get started.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
    },
  ];

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-4xl md:text-4xl font-medium text-center mb-14"
          style={{ color: navy }}
        >
          Latest Blogs
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              <div
                className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden 
                transition-all duration-500 group-hover:scale-105"
              >
                {/* Image */}
                <div className="h-76 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover 
                    transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold mb-3 transition group-hover:text-[#d1a32c]"
                    style={{ color: navy }}
                  >
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {blog.desc}
                  </p>

                  <button
                    onClick={() => window.location.href = `/blog/${blog.id}`}
                    className="flex items-center gap-2 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:scale-105 transition"
                    style={{ backgroundColor: navy }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>

                <div className="h-2" style={{ backgroundColor: navy }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
