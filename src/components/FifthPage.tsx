import vines from "@/assets/vines.png";
import Image from "../ui/Image";
const FifthPage = () => {
  return (
    <div className="px-4 md:px-12">
      <Image
        src={vines}
        alt={"Vines Image"}
        className="rounded-[40px] max-w-full"
      />
    </div>
  );
};

export default FifthPage;
