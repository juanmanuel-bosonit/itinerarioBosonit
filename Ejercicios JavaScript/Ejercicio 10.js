const removeHTMLTags = (string) => {
  return string.replace( /(<([^>]+)>)/ig, '');
}


const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
 
console.log(result); // lorem ipsum