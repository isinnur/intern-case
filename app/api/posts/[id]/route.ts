import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params; // Dinamik ID'yi al

  try {
    const post = await prisma.blogPost.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!post) {
      return new Response(JSON.stringify({ message: "Post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch post" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
