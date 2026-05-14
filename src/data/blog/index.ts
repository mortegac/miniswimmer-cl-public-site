import { BlogArticle, BlogCategory } from "./types";
import { articlesCluster1 } from "./cluster-1-matronatacion";
import { articlesCluster2 } from "./articles-cluster-2";
import { articlesCluster3 } from "./articles-cluster3";
import { articlesCluster4 } from "./articles-cluster4";
import { articlesCluster5 } from "./articles-cluster5";
import { articlesCluster6 } from "./articles-cluster6";

export * from "./types";

export const allArticles: BlogArticle[] = [
  ...articlesCluster1,
  ...articlesCluster2,
  ...articlesCluster3,
  ...articlesCluster4,
  ...articlesCluster5,
  ...articlesCluster6,
].sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
  return allArticles.filter((a) => a.category === category);
}

export function getRelatedArticles(
  article: BlogArticle,
  limit = 4,
): BlogArticle[] {
  return allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return allArticles.map((a) => a.slug);
}
