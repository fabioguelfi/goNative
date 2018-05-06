const initialState = [
  'Fazer Café',
  'Estudar Gonative'
]

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}
