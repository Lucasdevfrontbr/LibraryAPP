/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  devServer: {
    host: '192.168.0.58',
    port: 3000,
    disableHostCheck: true,
  },
};
module.exports = nextConfig

