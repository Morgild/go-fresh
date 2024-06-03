import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const SocialLinks = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4 text-white">
      <FaFacebook
        onClick={() => {
          router.push("http://www.fb.com");
        }}
        size={30}
      />
      <FaInstagram
        size={30}
        onClick={() => {
          router.push("http://www.instagram.com");
        }}
      />
      <FaXTwitter
        onClick={() => {
          router.push("http://www.twitter.com");
        }}
        size={30}
      />
    </div>
  );
};
