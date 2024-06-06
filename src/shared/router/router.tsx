import { createBrowserRouter } from 'react-router-dom';
import Comment from '../../pages/Comment';
import Root from '../../pages/Root';
import Comments from '../../components/Comments/Comments';
import { ProfileForm } from '@/components/form/dsf';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Comments />,
      },
      {
        path: '/comments/:id',
        element: <ProfileForm />,
      },
    ]
  }
])