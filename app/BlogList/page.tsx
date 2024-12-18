import Image from "next/image";

const BlogList = () => {
  return (
    <div className="w-340 mt-12 flex items-center justify-center flex-col">
      <h2 className="font-semibold text-2xl ">Page Title</h2>
      <div className="flex text-spanText gap-5 text-sm mb-12">
        <span>Home</span>
        <span>Link One</span>
      </div>
      {/* imageli olan kısım */}
      <div>
        {/* content */}
        <div>
          <Image
            src="/assets/heroImg.png"
            width="1216"
            height="450"
            alt="Hero image"
          />
          <span>Technology</span>
          <span>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </span>
          <span>Tracey Wilson</span>
          <span>August 20, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
