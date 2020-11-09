import BlockContent from "@sanity/block-content-to-react";
import HightlightCode from "components/HighlightCode";
import { urlFor } from "lib/api";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HightlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HightlightCode>
      );
    },
    image: ({ node: { asset, alt, position = 'center' } }) => {

      return (
        <div className={`blog-image blog-image-${position}`} >
          <img src={urlFor(asset).height(300).fit("max").url()} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
);

export default BlogContent;
