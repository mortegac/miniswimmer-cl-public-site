export type BlogCategory =
  | "matronatacion"
  | "desarrollo-bebe"
  | "seguridad-acuatica"
  | "consejos-practicos"
  | "programas-especiales";

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  category: BlogCategory;
  publishDate: string;
  lastModified?: string;
  readingTime: number;
  coverImage: {
    src: string;
    alt: string;
  };
  keywords: {
    primary: string[];
    secondary: string[];
  };
  content: string;
  faq: BlogFaq[];
  ctaText: string;
  ctaHref: string;
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  matronatacion: "Matronatación",
  "desarrollo-bebe": "Desarrollo del Bebé",
  "seguridad-acuatica": "Seguridad Acuática",
  "consejos-practicos": "Consejos Prácticos",
  "programas-especiales": "Programas Especiales",
};

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  matronatacion: "bg-primary/10 text-primary",
  "desarrollo-bebe": "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  "seguridad-acuatica": "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300",
  "consejos-practicos": "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  "programas-especiales": "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
};
