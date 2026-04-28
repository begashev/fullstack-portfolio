import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {

  const posts = [
    {
      id: 1,
      slug: "learn-nextjs-basics",
      title: "Learn Next.js Basics",
      content: `# Learn Next.js Basics Nextjs is a popular React framework that helps you build fast and SEO-freindly website.
      
      ## Why use Nextjs?
      -Built-in routing system 
      -Server-side rendering and static generation
      -Great developer exerience

      **Tip:** Start with the App Router if you are building new projects.
      `
    },
  ];
  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m John Doe</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          A full-stack developer passionate about building great web
          experiences.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/comments">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          I specialize in React, Next.js, and TypeScript. With years of
          experience building scalable applications, I love turning ideas into
          reality.
        </p>
      </section>

      {/* Recent Posts */}

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        {posts.length > 0 ? (
          <div className="grid gap-4">
            {posts.map((post) => (
              <Card key={post.id} className="hover:bg-accent transition-colors">
                <Link href={`/blog/${post.slug}`} className="block p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.content}</p>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts yet</p>
        )}
      </section>

    </main >
  )
}