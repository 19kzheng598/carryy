import PostForm from '@/components/ui/forms/PostForm'
const CreatePosts = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5x1 flex-start gap-3 justify-start w-full">
          <h2 className="h2-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>
        <PostForm action="Create"/>
      </div>
    </div>
  )
}

export default CreatePosts