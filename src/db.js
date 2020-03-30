const users = [
  {
    id: '1',
    name: 'Josh',
    lastName: 'Ospina',
    email: 'jospina@gmail.com',
  },
  {
    id: '2',
    name: 'Ian',
    lastName: 'Ospina',
    email: 'iospina@gmail.com',
  },
]
const authors = [
  {
    id: '1',
    name: 'Gabriel Garcia Marquez',
    country: 'Colombia',
    register_by: '1',
  },
  {
    id: '2',
    name: 'Ricardo Palma',
    country: 'Perú',
    register_by: '2',
  },
  {
    id: '3',
    name: 'Pablo Neruda',
    country: 'Chile',
    register_by: '1',
  },
  {
    id: '4',
    name: 'Cesar Vallejo',
    country: 'Perú',
    register_by: '2',
  },
]
const books = [
  {
    id: '1',
    title: 'Cien Años de Soledad',
    description: 'Libro acera de una familia',
    quantity: 200,
    price: 100,
    writted_by: '1',
    register_by: '2',
  },
  {
    id: '2',
    title: 'Tungsteno',
    description: 'Libro acerca de la explotacion laboral',
    quantity: 10,
    price: 50,
    writted_by: '4',
    register_by: '1',
  },
  {
    id: '3',
    title: 'Los Heraldos Negros',
    description: 'Poemas modernistas',
    quantity: 10,
    price: 20,
    writted_by: '4',
    register_by: '2',
  },
  {
    id: '4',
    title: 'Vivir para contarlo',
    description: 'Libro acerca de las experiencias vividas',
    quantity: 25,
    price: 25,
    writted_by: '1',
    register_by: '2',
  },
]

const db = {
  users,
  authors,
  books,
}

export { db as default }
