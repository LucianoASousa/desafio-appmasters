import ContentCards from '@/components/ContentCards'

export default function Games({
  searchParams: { genre, name },
}: {
  searchParams: { genre: string; name: string }
}) {
  if (!genre) {
    genre = ''
  }
  return <ContentCards genre={genre} name={name} />
}
