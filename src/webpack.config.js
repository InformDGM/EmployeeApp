module.exports = {
  resolve: {
    fallback: { zlib: require.resolve("browserify-zlib") },
  },
  resolve: {
    fallback: { zlib: false },
  },
  resolve: {
    fallback: { querystring: require.resolve("querystring-es3") },
  },
  resolve: {
    fallback: { querystring: false },
  },
  resolve: {
    fallback: { path: require.resolve("path-browserify") },
  },
  resolve: {
    fallback: { path: false },
  },
};
