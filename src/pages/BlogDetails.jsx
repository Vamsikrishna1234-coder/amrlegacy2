import { useParams, Link } from "react-router-dom";
import { blogs } from "../assets/data/blogs.js";
import img from "../assets/images/parallalex img.jpg";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="text-center text-red-600 text-xl py-20">
        Blog not found.
      </div>
    );
  }

  // For Previous / Next Navigation
  const currentIndex = blogs.findIndex((b) => b.id === blog.id);
  const previousBlog = blogs[currentIndex - 1];
  const nextBlog = blogs[currentIndex + 1];

  return (
    <div className="w-full bg-gray-50 pb-20">

      {/* ========= HERO SECTION ========= */}
      <div
        className="h-[350px] md:h-[460px] w-full bg-cover bg-center relative flex items-end"
        style={{
           backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        
      </div>

      {/* ========= CONTENT SECTION ========= */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Stylish Quote Box (Optional) */}
        <div className="bg-[#203370] text-white text-lg font-medium p-6 rounded-xl mb-10 shadow-md">
            
          “Real estate insights that help you make better investment decisions.”
        </div>

        {/* Full Blog Content */}
        <div className="text-gray-700 text-[18px] leading-relaxed whitespace-pre-line">
          {blog.full}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-300 my-12"></div>

        {/* ========= PREVIOUS / NEXT BLOGS ========= */}
        <div className="flex justify-between items-center">

          {previousBlog ? (
            <Link
              to={`/blog/${previousBlog.id}`}
              className="text-[#203370] font-medium hover:text-[#d1a32c] transition"
            >
              ❮ {previousBlog.title}
            </Link>
          ) : (
            <div></div>
          )}

          {nextBlog ? (
            <Link
              to={`/blog/${nextBlog.id}`}
              className="text-[#203370] font-medium hover:text-[#d1a32c] transition"
            >
              {nextBlog.title} ❯
            </Link>
          ) : (
            <div></div>
          )}

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-300 my-12"></div>

        {/* ========= RELATED POSTS ========= */}
        <h2 className="text-2xl font-semibold mb-6 text-[#203370]">
          More Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {blogs
            .filter((b) => b.id !== blog.id)
            .slice(0, 2)
            .map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#203370] group-hover:text-[#d1a32c] transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                </div>
              </Link>
            ))}

        </div>

        {/* ========= CTA BOX ========= */}
        <div className="bg-[#203370] text-white p-8 rounded-2xl mt-16 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Looking to Buy a Villa?</h3>
          <p className="text-white/80 mb-6">
            Contact us today — our team will guide you with premium plots and villa options.
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-[#d1a32c] rounded-full font-medium hover:bg-[#b68f1f] transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}
