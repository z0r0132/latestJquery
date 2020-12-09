/**
 * generate script tag to use in html file
 * @param {String} version
 */
function generateScriptTag(version) {
  return `<script
   src="https://ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js"
   crossorigin="anonymous"
   ></script>`;
}
module.exports = generateScriptTag;
