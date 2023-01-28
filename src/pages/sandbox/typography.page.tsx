import React from "react";

import Typography from "@/components/typography/Typography";

export default function Typo() {
  return (
    <div>
      <div className="p-4">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="t">Title</Typography>
        <Typography variant="p">Paragraph</Typography>
        <Typography variant="b1">Body</Typography>
        <Typography variant="b2">Button</Typography>
        <Typography variant="c">Caption</Typography>
      </div>
    </div>
  );
}
