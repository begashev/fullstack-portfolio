import { Card, CardContent } from "./ui/card"

export default function CommnetList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">No comments yet. Be the first to leave one!</p>
    )
  }
  return <div className="flex flex-col gap-4">
    {
      comments.map(comment => (
        <Card
          key={comment.id}
        >
          <CardContent>
            
          </CardContent>
        </Card>
      ))
    }
  </div>
}