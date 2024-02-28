/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./components/ImgLoader.ts",
  },
};

export default nextConfig;
