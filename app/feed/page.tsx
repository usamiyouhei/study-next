import Link from "next/link";
import React from "react";

function FeedPage() {
  return (
    <div>
      <h1>Feed Page</h1>
      <Link href="/photo/1">Go to Photo 1</Link>
    </div>
  );
}

export default FeedPage;
