import { redirect } from 'next/navigation';

// Articles now live inside the merged Portfolio hub.
export default function ArticlesIndexRedirect() {
  redirect('/portfolio');
}
