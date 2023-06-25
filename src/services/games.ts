export async function getGames() {
  const URL = process.env.URL_ENDPOINT
  const EMAIL = process.env.EMAIL_ADDRESS
  const myHeaders = new Headers()

  if (!URL) throw new Error('URL_ENDPOINT não está definida')
  if (!EMAIL) throw new Error('EMAIL_ADDRESS não está definida')
  myHeaders.append('dev-email-address', EMAIL)

  const options = {
    headers: myHeaders,
    next: { revalidate: 30 },
  }

  const response = await fetch(URL, options)
  return { data: await response.json(), status: response.status }
}
