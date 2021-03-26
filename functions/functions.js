export const ParsePosts = (content) => {
  let newArrayContents = null;
  if (!content) {
    return newArrayContents;
  }

  const itemContents = content?.items;
  newArrayContents = [];

  // Loop Parser
  for (let i = 0; i < itemContents.length; i++) {
    let newContents = {};
    const val = itemContents[i];
    console.log(val);
    newContents.contentId = val?.contentID;
    newContents.title = val?.fields?.title;
    newContents.author = val?.fields?.authorName;
    newContents.category = val?.fields?.categoryName;
    newContents.date = val?.fields?.date;
    newContents.slug = val?.fields?.slug;
    newContents.content = val?.fields?.content;
    newContents.image = {
      url: val?.fields?.image?.url,
      alt: val?.fields?.image?.label,
    };
    // Add to Array
    newArrayContents.push(newContents);
  }

  return newArrayContents;
};
