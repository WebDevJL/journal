//match given folder
const folderName = "blog";
//Source: https://stackoverflow.com/a/9350443
const regex = `^(.*?(\\b${folderName}\\b)[^$]*)$`;

console.info(regex);

const matchedFiles = siteData.filter((file) => {
  if (file.filePathRelative.match(new RegExp(regex, "g"))) {
    const fileParsed = {
      data: file.data,
      slug: file.slug,
    };
    return fileParsed;
  }
});

console.info(matchedFiles);
