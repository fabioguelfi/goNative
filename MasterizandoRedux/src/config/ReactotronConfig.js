import Reactotron from 'reactotron-react-native'

const tron = Reactotron
  .configure({ host: '192.168.1.120' })
  .useReactNative()
  .connect()

tron.clear(); //Limpa o console a cada requisição de atualizacção

console.tron = tron; //Gera um console.log global para uso em qualquer arquivo
