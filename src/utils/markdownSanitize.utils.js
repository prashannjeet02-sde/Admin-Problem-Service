/** Utility function to sanatize html.
 *
 * As we are providing markdown to our admin to store coding problems and images,there are posibility that someone can send malicious scripts to our markdown.
 *
 *So 1st we will convert the inserted markdown text to html text using npm marked package,so that if someone enter some malicious scripts in markdown it will get sanitized i.e removed.
 *
 * Then we will use html sanitize package that will only accept html tags that we will allow from backend
 *
 * After the html is sanitized we can convert the sanitized html to markdown again by using a package named turndown.
 */
const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeProblemData(data) {
  const turndownService = new TurndownService();

  const markedData = marked.parse(data);

  const sanitizeData = sanitizeHtml(markedData, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
  });

  const turndownData = turndownService.turndown(sanitizeData);

  return turndownData;
}

module.exports = sanitizeProblemData;
