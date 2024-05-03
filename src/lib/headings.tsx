import  { Heading } from '@/components/ui/Headings'

type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>
export const headings: Record<string, React.FC<HeadingProps>> = {
  h1: props => {
    return (
      <Heading {...props} type='h1'>
        {props.children}
      </Heading>
    )
  },
  h2: props => {
    return (
      <Heading {...props} type='h2'>
        {props.children}
      </Heading>
    )
  },
  h3: props => {
    return (
      <Heading {...props} type='h3'>
        {props.children}
      </Heading>
    )
  },
  h4: props => {
    return (
      <Heading {...props} type='h4'>
        {props.children}
      </Heading>
    )
  },
  h5: props => {
    return (
      <Heading {...props} type='h5'>
        {props.children}
      </Heading>
    )
  },
  h6: props => {
    return (
      <Heading {...props} type='h6'>
        {props.children}
      </Heading>
    )
  }
}