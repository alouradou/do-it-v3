import { EleventyRenderPlugin, EleventyHtmlBasePlugin } from "@11ty/eleventy"
import setupMarkdown from './config/markdown/index.js';
import setupShortcodes from "./config/markdown/shortcodes/index.js"
import {template} from "./config/markdown/shortcodes/quotes/utils.js";

export default async function(eleventyConfig) {

  setupMarkdown(eleventyConfig);
  setupShortcodes(eleventyConfig);


  // const embedYouTube = (await import("eleventy-plugin-youtube-embed")).default;
  // const eleventyNavigationPlugin = (await import("@11ty/eleventy-navigation")).default;

  // const markdownConfig = (await import("./config/markdown/index.js")).default;
  const assetsConfig = (await import("./config/assets.js")).default;
  // const searchConfig = (await import("./config/search.js")).default;
  const collectionsConfig = (await import("./config/filters.js")).default;

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // eleventyConfig.addPlugin(embedYouTube);
  // eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // markdownConfig(eleventyConfig);
  assetsConfig(eleventyConfig);
  // searchConfig(eleventyConfig);
  collectionsConfig(eleventyConfig);

  eleventyConfig.addFilter('getValueFromPath', function(str, separator, value) {
    return str.split(new RegExp(separator))[value];
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
  };
};
