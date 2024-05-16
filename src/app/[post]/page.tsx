import { getPostContent, getPostList } from '@/lib/postsData'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { Checkbox, Code, Link } from '@nextui-org/react'
import { headings } from '@/lib/headings'

interface Props {
  params: {
    post: string
  }
}

const options: Options = {
  grid: false,
  theme: 'andromeeda',
  defaultLang: {
    block: 'plaintext',
    inline: 'plaintext'
  }
}

interface CodeProps
  extends React.Component<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  > {
  'data-language'?: string
  children: any
  style?: any
}

const DefaultCode: React.FC<CodeProps> = (props, p) => {
  if (props['data-language'] === 'plaintext') {
    return (
      <Code color='primary' className='before:content-none after:content-none'>
        {props.children}
      </Code>
    )
  }
  return (
    <code
      {...props}
      className='before:content-none after:content-none rounded-md '
    ></code>
  )
}

export async function generateStaticParams() {
  return getPostList().map(value => {
    return {
      post: value
    }
  })
}

export default function Page({ params }: Props) {
  const markdown = getPostContent(params.post)
  return (
    <div
      className='
      mt-9
      px-7
      mx-auto
      prose 
      prose-blockquote:border-cyan-800
      dark:prose-headings:text-white
      dark:prose-strong:text-white 
      dark:prose-p:text-white 
      dark:prose-li:text-white
      dark:prose-td:text-white
       '
    >
      <MDXRemote
        source={markdown}
        components={{
          input: props => {
            if (props.type === 'checkbox') {
              return (
                <Checkbox
                  isDisabled={props.disabled}
                  defaultSelected={props.checked ?? false}
                ></Checkbox>
              )
            }
            return <input {...props}></input>
          },
          code: DefaultCode as any,
          a: props => {
            return (
              <Link color='primary' href={props.href}>
                {props.children}
              </Link>
            )
          },
          ...headings
        }}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            development: process.env.NODE_ENV === 'development',
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, [rehypePrettyCode as any, options]]
          }
        }}
      />
    </div>
  )
}
