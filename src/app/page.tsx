import ListOfPosts from "@/components/ui/ListOfPosts"

export default function Home() {

  return (
    <div className="flex items-center justify-center mt-9">
      <div className="mdx-auto">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ListOfPosts />
      </div>
    </div>
  )
}