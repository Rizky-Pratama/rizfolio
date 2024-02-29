import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact me",
  description:
    "Feel free to reach out to me if you have any questions or if you just want to chat. I am always open to new opportunities and collaborations.",
};

const Page = () => {
  return (
    <div className="space-y-7">
      <h1>Contact me</h1>
      <p>
        Feel free to reach out to me if you have any questions or if you just
        want to chat. I am always open to new opportunities and collaborations.
      </p>
      <p>
        You can contact me at{" "}
        <Link
          className="underline"
          href="mailto:muhammadrizkyprtm2308@gmail.com"
        >
          muhammadrizkyprtm2308@gmail.com
        </Link>
      </p>
    </div>
  );
};

export default Page;
