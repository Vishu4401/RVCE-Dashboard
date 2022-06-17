import push from 'git-push';

const remote = {
  name: 'Notestore',
  url: 'https://github.com/Vishu4401/Notestore',
  branch: 'gh-pages'
};

export default async () => {
  await build();
  await new Promise(resolve => push('./build', remote, resolve));
};