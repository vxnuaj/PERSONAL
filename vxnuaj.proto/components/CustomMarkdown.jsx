import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';

const CustomMarkdown = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, [remarkFootnotes, { inlineNotes: true }]]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;
