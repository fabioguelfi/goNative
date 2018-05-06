const initialState = [
  { id: 0, text: 'Fazer Café'},
  { id: 1, text: 'Estudar Gonative'},
]

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
