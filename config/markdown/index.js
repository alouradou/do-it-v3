import markdownItAttrs from "markdown-it-attrs"
import eleventyMdSyntaxHighlight from "@pborenstein/eleventy-md-syntax-highlight"

export default async function(eleventyConfig) {

    const markdownIt = (await import("markdown-it")).default;
    const markdownItMultimdTable = (await import("markdown-it-multimd-table")).default;

    let markdownItLibrary = markdownIt({
        html: true,
        breaks: false,
        linkify: true
    })

    markdownItLibrary
        .use(markdownItAttrs)
        .use(markdownItMultimdTable, {
            multiline: true,
            rowspan: true,
            headerless: true,
            multibody: true,
            aotolabel: true,
        });


    eleventyConfig.addPlugin(eleventyMdSyntaxHighlight,
        {showLineNumbers: false}
    )

    // eleventyConfig.addPlugin(require("eleventy-plugin-mathjax"));

    eleventyConfig.addFilter("md", function (content = "") {
        return markdownItLibrary.render(content);
    });

    eleventyConfig.setLibrary("md", markdownItLibrary)

    // const shortcodes = (await import('./shortcodes/index.js')).default;
    // shortcodes(eleventyConfig);
};
