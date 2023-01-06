declare type FetchPriority = 'high' | 'low' | 'auto'

namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    block?: string
    element?: string
    fetchpriority?: FetchPriority
  }
}