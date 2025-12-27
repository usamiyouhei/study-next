import React from "react";

async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1>Blog ID: {id}</h1>
    </div>
  );
}

export default BlogPage;
