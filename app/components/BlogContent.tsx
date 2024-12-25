import Image from "next/image";

interface ContentProps {
  content: string;
}

const BlogContent: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className="mt-8 ">
      <Image
        src="/assets/singleBlog2.png"
        width={800}
        height={462}
        alt="Single blog image"
      />
      <div className="mt-8">
        <p className="text-[#3B3C4A] dark:text-[#BABABF]">{content}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">
            Research Your Destination
          </h2>
          <p className="text-[#3B3C4A] dark:text-[#BABABF]">{content}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Plan Your Itinerary</h2>
          <p className="text-[#3B3C4A] dark:text-[#BABABF]">{content}</p>
        </div>

        <div className="bg-[#E8E8EA] p-8 rounded-xl my-8 italic">
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </div>

        <Image
          src="/assets/singleBlog3.png"
          width={800}
          height={462}
          alt="Single blog image"
        />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">
            Pack Lightly and Smartly
          </h2>
          <p className="text-[#3B3C4A] dark:text-[#BABABF]">{content}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Stay Safe and Healthy</h2>
          <p className="text-[#3B3C4A] dark:text-[#BABABF]">{content}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">
            Immerse Yourself in the Local Culture
          </h2>
          <p className="text-[#3B3C4A] dark:text-[#BABABF]">
            {content}
            {content}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Capture Memories</h2>
          <p className="text-[#3B3C4A] dark:text-[#BABABF]">{content}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion:</h2>
          <p className="text-[#3B3C4A] dark:text-[#BABABF]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
