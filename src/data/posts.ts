'use server'

import { Post } from "@/state/types";



const posts: Post[] = [
  {
    id: "p-001",
    authorId: "u-101",
    authorName: "Bob",
    createdAt: "2026-01-30T18:12:00.000Z",
    title: "VPC Subnetting im Alltag",
    body: "Heute habe ich eine VPC in Public/Private Subnets geschnitten und Route Tables sauber getrennt. Security Groups waren danach viel leichter zu argumentieren.",
    likedByMe: false,
    likeCount: 12,
  },
  {
    id: "p-002",
    authorId: "u-202",
    authorName: "Jan",
    createdAt: "2026-01-30T20:05:00.000Z",
    title: "IAM Policies: weniger ist mehr",
    body: "Sobald man Ressourcen-ARNs exakt scoped und Conditions nutzt, wird Least-Privilege plötzlich praktikabel. Wildcards sind der Anfang vom Ende.",
    likedByMe: true,
    likeCount: 31,
  },
  {
    id: "p-003",
    authorId: "u-303",
    authorName: "Lina",
    createdAt: "2026-01-31T08:30:00.000Z",
    title: "CI/CD Pipeline: kleine Schritte",
    body: "Ein minimaler Build+Test Job in GitHub Actions reicht oft, um Teams zu disziplinieren. Danach erst Linting, Deployments und Environments.",
    likedByMe: false,
    likeCount: 7,
  },
  {
    id: "p-004",
    authorId: "u-404",
    authorName: "Omar",
    createdAt: "2026-01-31T09:10:00.000Z",
    title: "Terraform State ohne Drama",
    body: "Remote State in S3 plus Locking via DynamoDB ist boring - und genau das ist gut. Wichtig ist ein klarer Workspace- und Naming-Standard.",
    likedByMe: true,
    likeCount: 19,
  },
  {
    id: "p-005",
    authorId: "u-505",
    authorName: "Sofia",
    createdAt: "2026-01-31T10:45:00.000Z",
    title: "Observability: Logs sind nicht genug",
    body: "Erst Metriken + Traces zeigen dir, warum dein Service langsam wird. Logs helfen dann beim 'wo genau' - aber nicht beim 'wie schlimm'.",
    likedByMe: false,
    likeCount: 4,
  },
];

const DELAY = 2000



export async function getPosts() {
    return new Promise((resolve, reject) => setTimeout(()=>resolve(posts),
    //reject(new Error('Failed to fetch posts))
     DELAY),
)
}
