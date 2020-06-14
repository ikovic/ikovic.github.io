module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ js: 'js' });
  eleventyConfig.addPassthroughCopy('images');

  return {
    dir: {
      input: 'pages',
      includes: '../_includes',
      output: 'static',
    },
  };
};
