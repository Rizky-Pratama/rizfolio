import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuHome } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface ItemList {
  text: String;
  link: any;
  icon: React.ReactElement;
}

const itemList: ItemList[] = [
  {
    text: "home",
    link: "/",
    icon: <LuHome />,
  },
  {
    text: "projects",
    link: "/projetc",
    icon: <MdOutlineRocketLaunch />,
  },
  {
    text: "blog",
    link: "/blog",
    icon: <HiOutlineNewspaper />,
  },
  {
    text: "contact",
    link: "/contact",
    icon: <MdOutlineMail />,
  },
];

const contactList: ItemList[] = [
  {
    text: "github",
    link: "https://github.com/rizky-pratama",
    icon: <SiGithub />,
  },
  {
    text: "linkedin",
    link: "https://www.linkedin.com/in/rizkyprtm",
    icon: <SiLinkedin />,
  },
  {
    text: "instagram",
    link: "https://instagram.com/rizkyprtm___",
    icon: <SiInstagram />,
  },
];

const Sidebar = (props: Props) => {
  const { open, setOpen } = props;
  const classOpen: String = !open ? "-left-[450px] " : "left-0 ";
  return (
    <div
      className={`fixed lg:relative ${classOpen} lg:left-0 h-screen  w-[380px]  transition-all duration-75`}
    >
      <nav className={`fixed top-0 h-screen bg-stone-950 text-white z-20`}>
        <div className="py-5 px-8 min-h-svh space-y-10">
          <header className="flex justify-between items-center">
            <span className="flex">
              <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
              <h1 className="text-2xl font-bold">IZFOLIO</h1>
            </span>
            <CgMenuRight
              size={30}
              onClick={() => setOpen(false)}
              className="lg:hidden cursor-pointer"
            />
          </header>
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-neutral-700 overflow-hidden hover:border-indigo-500 transition-all">
              <PhotoProvider bannerVisible={false}>
                <PhotoView src="/avatar.jpg">
                  <Image
                    src={"/avatar.jpg"}
                    width={48}
                    height={48}
                    alt="Avatar"
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
            <div className="flex-col">
              <h4 className="text-base font-semibold text-slate-50">
                Muhammad <span className="text-indigo-500">Rizky</span> Pratama
              </h4>
              <p className="text-sm font-light text-slate-200">
                Frontend Developer💻
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <ul className="space-y-2">
              {itemList.map(({ icon, text, link }, i) => (
                <li key={i} className="flex">
                  <Link
                    href={link}
                    className="flex gap-2 items-center text-base font-medium text-neutral-100 hover:text-indigo-500 capitalize transition-colors duration-100"
                  >
                    {icon}
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={"#"}
              className="w-max px-6 py-3 text-base font-medium rounded-full bg-gradient-to-br from-indigo-500  to-indigo-600 hover:text-white  hover:from-indigo-400 hover:to-indigo-300 transition-all duration-100 shadow-md shadow-indigo-600/60 cursor-pointer hover:translate-x-2"
            >
              Download CV
            </Link>
          </div>
          <div className="space-y-3">
            <span className="text-base font-semibold text-stone-100">
              Lets connect with me
            </span>
            <ul className="space-y-2">
              {contactList.map(({ icon, text, link }, i) => (
                <li key={i} className="flex">
                  <Link
                    href={link}
                    className="flex gap-2 items-center text-base font-medium text-neutral-100 hover:text-indigo-500 capitalize transition-colors duration-100"
                    target="_blank"
                  >
                    {icon}
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`fixed lg:hidden top-0 w-full h-full ${
          open && "backdrop-blur-sm"
        } z-10`}
        onClick={() => setOpen(false)}
      ></div>
    </div>
  );
};

export default Sidebar;
