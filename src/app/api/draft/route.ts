// route handler with secret and slug
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import {fetchEntryById} from "@/api";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const id = searchParams.get('id')
  const { CONTENTFUL_PREVIEW_SECRET } = process.env

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== CONTENTFUL_PREVIEW_SECRET || !id) {
    return new Response('Invalid token', { status: 401 })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const entry = await fetchEntryById(id, true)

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!entry) {
    return new Response('Invalid entry ID', { status: 401 })
  }

  if (!entry.__typename) {
    return new Response('Missing typename', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  if (entry.__typename === "Rug") {
    redirect('/kollektion/' + entry.slug)
  }

  redirect(entry.slug)
}