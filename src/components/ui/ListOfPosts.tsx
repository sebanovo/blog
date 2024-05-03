import Link from 'next/link'
import Image from 'next/image'
import { getPostsMetadataList } from '@/lib/postsData'

export default function ListOfPosts() {
  const posts = getPostsMetadataList()
  return (
    <>
      {posts.map(({ id,title, description, image, date }) => {
        return (
          <Link
            key={id}
            href={`/${id}`}
            className='px-2 dark:border-b-blue-600 border-b-2 w-full flex items-center py-3 justify-between dark:hover:bg-slate-950 dark:bg-transparent dark:hover:text-white dark:text-blue-600 border-zinc-800 text-black hover:text-blue-600 hover:border-b-blue-600'
          >
            <div className='flex items-center'>
              <Image
                className='mx-0'
                width={50}
                height={50}
                src={`/images/${image}.png`}
                alt={`image of ${image}`}
              />
              <div className='ml-3'>
                <h3 className='m-0'>{title}</h3>
                <span className='text-xs font-montserrat'>{date}</span>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}
