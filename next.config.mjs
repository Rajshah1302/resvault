/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com','assets.aceternity.com'], 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|m4a)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/media/", 
        },
      },
    });
    return config;
  },
};

export default nextConfig;
