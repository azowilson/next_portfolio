import { ReactNode } from "react";

/**
 * Skills data with Simple Icons slug for each (cdn.simpleicons.org).
 * Fallback slug "" uses a generic icon in the UI.
 */
export type SkillCategory = {
  title: string;
  items: { name: string; iconSlug: string }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", iconSlug: "python" },
      { name: "JavaScript", iconSlug: "javascript" },
      { name: "SQL", iconSlug: "postgresql" },
      { name: "Java", iconSlug: "java" },
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "HTML", iconSlug: "html5" },
      { name: "CSS", iconSlug: "css" },
    ],
  },
  {
    title: "Frameworks / Libraries",
    items: [
      { name: "Spring Boot", iconSlug: "springboot" },
      { name: "Nest.js", iconSlug: "nestjs" },
      { name: "Express.js", iconSlug: "express" },
      { name: "React", iconSlug: "react" },
      { name: "Next.js", iconSlug: "nextdotjs" },
      { name: "Jest", iconSlug: "jest" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", iconSlug: "postgresql" },
      { name: "MongoDB", iconSlug: "mongodb" },
      { name: "Redis", iconSlug: "redis" },
    ],
  },
  {
    title: "Cloud Platforms",
    items: [
      { name: "Azure", iconSlug: "microsoftazure" },
      { name: "AWS", iconSlug: "amazonaws" },
      { name: "Cloudflare", iconSlug: "cloudflare" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", iconSlug: "git" },
      { name: "GitHub", iconSlug: "github" },
      { name: "GitLab", iconSlug: "gitlab" },
      { name: "Jira", iconSlug: "jira" },
      { name: "Docker", iconSlug: "docker" },
      { name: "Kubernetes", iconSlug: "kubernetes" },
      { name: "ArgoCD", iconSlug: "argo" },
      { name: "CI/CD", iconSlug: "githubactions" },
      { name: "Kafka", iconSlug: "apachekafka" },
    ],
  },
  {
    title: "Operating Systems",
    items: [
      { name: "Linux", iconSlug: "linux" },
      { name: "Windows", iconSlug: "windows" },
      { name: "macOS", iconSlug: "apple" },
    ],
  },
  {
    title: "Methodologies",
    items: [
      { name: "Agile", iconSlug: "trello" },
      { name: "Microservices", iconSlug: "" },
    ],
  },
];
