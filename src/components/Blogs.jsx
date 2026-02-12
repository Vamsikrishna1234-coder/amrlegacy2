
import React from "react";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/images/amr project1.jpg";
import img2 from "../assets/images/amr project2.jpg";
import img3 from "../assets/images/ORR.jpg";

const BlogsSection = () => {
  const gold = "#d1a32c";
  const navy = "#203370";

  const blogs = [
    {
      id: 1,
      title: "Top Benefits of Living in a Gated Community",
      desc: "Discover why modern families prefer gated communities — safety, amenities, privacy, and a healthier lifestyle.",
      image: img1,
    },
    {
      id: 2,
      title: "How Smart Home Tech is Changing Real Estate",
      desc: "From automated lighting to security monitoring, explore how smart homes are reshaping modern living.",
      image: img3,
    },
    {
      id: 3,
      title: "Why Investing in Real Estate is Always Smart",
      desc: "Learn why real estate remains one of the safest and most profitable long-term investment strategies and how to get started.",
      image: img2,
    },
  ];

  return (
    <div className="w-full py-20 bg-gray-100">
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
