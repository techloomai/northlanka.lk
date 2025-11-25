import type { Metadata } from "next";

type BlogPageProps = {
  params: { slug: string };
};

const SITE_URL = "https://www.northlanka.lk";

const getPostData = async (slug: string) => {
  return {
    title: `ARTICLE_TITLE ${slug}`,
    description: "ARTICLE_DESCRIPTION",
    image: `${SITE_URL}/og-article.jpg`,
    publishedTime: "ARTICLE_PUBLISHED_TIME",
    modifiedTime: "ARTICLE_MODIFIED_TIME",
  };
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPostData(params.slug);
  const canonical = `${SITE_URL}/blog/${params.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description,
      siteName: "North Lanka Tours & Travels",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await getPostData(params.slug);
  const canonical = `${SITE_URL}/blog/${params.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedTime,
    dateModified: post.modifiedTime,
    author: { "@type": "Organization", name: "North Lanka Tours & Travels" },
    publisher: {
      "@type": "Organization",
      name: "North Lanka Tours & Travels",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/north-lanka-logo.png` },
    },
    mainEntityOfPage: canonical,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </article>
  );
}

