import Image from "next/image";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="w-[392px] h-[488px] rounded-xl border border-spacing-1 border-[#E8E8EA] dark:border-[#242535] flex flex-col items-center cursor-pointer">
      <Image
        src="/assets/blog1.png"
        width={360}
        height={240}
        alt="Blog image "
        className="rounded-md mt-4"
      />

      <div className="w-[344px]">
        <div className="mt-6 ">
          <span className="bg-blue-50 text-blue-700 p-1 mb-2 w-fit rounded-md">
            Technology
          </span>
          <h2 className="text-xl font-semibold mt-4">{title}</h2>
        </div>

        <div className="mt-5 flex items-center gap-5 ">
          <span className="flex items-center gap-3">
            <Image
              src="/assets/blogPerson1.png"
              width={36}
              height={36}
              alt="Person Image"
            />
            Tracey Wilson
          </span>
          <span>August 20, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
