// temp_pasword: abcd1234
let auths = [
  {
    id: '1',
    username: 'bob',
    password: '$2b$10$ujay89z1fldRHEQwpFDELek3/4CIpVQg1oNnjHpJB61uk/8SDZb8q',
    name: 'Bob',
    email: 'bob@naver.com',
  },
  {
    id: '2',
    username: 'ellie',
    password: '$2b$10$ujay89z1fldRHEQwpFDELek3/4CIpVQg1oNnjHpJB61uk/8SDZb8q',
    name: 'Ellie',
    email: 'ellie@naver.com',
  },
];

export async function findByusername(username) {
  return auths.find((auth) => auth.username === username);
}

export async function findById(id) {
  return auths.find((auth) => auth.id === id);
}

export async function create(user) {
  const auth = { id: Date.now(), ...user };
  auths = [auth, ...auths];
  return auth.id;
}
