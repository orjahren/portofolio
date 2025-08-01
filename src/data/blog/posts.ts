import { PostType } from "@/src/app/types/blog/types";

const posts: ReadonlyArray<PostType> = [
  {
    title: "Example Post",
    date: new Date("2023-07-23"),
    keyword: "example-post",
    fileName: "example.mdx",
    blurb: "This is an example blog post.",
    description: "This post serves as an example for the blog structure.",
    link: "/blog/example-post",
    hidden: true, // Example of a hidden post
  },
  {
    title: "Er poenget med moralen å gjøre oss lykkelige?",
    date: new Date("2025-05-30"),
    keyword: "hva-er-poenget-med-moralen",
    fileName: "hva-er-poenget-med-moralen.mdx",
    blurb: "En utforskning av moralens rolle i samfunnet.",
    description:
      "Noen tanker om moralens grunnleggende betydning og hvordan den påvirker våre handlinger og hvorfor den finnes.",
    link: "/blog/hva-er-poenget-med-moralen",
  },
];

export default posts;
