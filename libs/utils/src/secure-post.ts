type Props = {
  url: string;
  data?: any;
  token: string;
};

export const securePost = async ({ url, token, data }: Props) => {
  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
};

export default securePost;
