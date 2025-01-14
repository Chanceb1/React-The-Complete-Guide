import { redirect, json } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login'; // 'login' or 'signup'

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Invalid mode.' }, { status: 422 });
    // return new Response(JSON.stringify({ message: 'Invalid mode.' }), {
    //   status: 422,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData)
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
    // throw new Response(JSON.stringify({ message: 'Could not authenticate user.' }), {
    //   status: 500,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  }

  // soon: manages the token in the browser
  return redirect('/'); // redirect to the home page
}