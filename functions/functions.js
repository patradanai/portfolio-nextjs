export const ParsePosts = (content) => {
  let newArrayContents = null;
  if (content) {
    return newArrayContents;
  }

  const itemContents = content?.items;
  const newContents = {};
  newArrayContents = [];

  // Loop Parser
  itemContents.map((val) => {
    newContents.title = val?.fields?.title;
    newContents.author = val?.fields?.authorName;
    newContents.category = val?.fields?.categoryName;
    newContents.date = val?.fields?.date;
    newContents.slug = val?.fields?.slug;
    newContents.image = {
      url: val?.fields?.image?.url,
      alt: val?.fields?.image?.label,
    };

    // Add to Array
    newArrayContents.push(newContents);
  });

  return newArrayContents;
};
