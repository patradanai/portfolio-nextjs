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

export const ParseProject = (content) => {
  let newArrayProjects = null;

  if (!content) {
    return newArrayProjects;
  }

  const itemContents = content?.items;

  newArrayProjects = [];

  for (let i = 0; i < itemContents.length; i++) {
    let newProject = {};
    const val = itemContents[i];

    const splitTag = val?.fields?.tagNames?.split(",");

    newProject.id = val?.contentID;
    newProject.name = val?.fields?.title;
    newProject.desc = val?.fields?.content;
    newProject.stack = splitTag;
    newProject.image = val?.fields?.image?.url;
    newProject.link = val?.fields?.link;

    newArrayProjects.push(newProject);
  }

  // Sort Numbered Project
  newArrayProjects = newArrayProjects.sort((a, b) => {
    if (a.id > b.id) {
      return -1;
    } else if (a.id < b.id) {
      return 1;
    } else {
      return 0;
    }
  });

  return newArrayProjects;
};
