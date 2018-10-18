import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismTypescript from 'react-syntax-highlighter/languages/prism/typescript'

export default {
  ...future,
  transitionDuration: '0',
  prism: {
    style: okaidia,
    languages: {
      ruby: prismTypescript
    }
  }
}
