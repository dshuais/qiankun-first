import { FrameworkConfiguration, FrameworkLifeCycles, LifeCycleFn, ObjectType } from "qiankun";

const MicroApps = [
  {
    name: 'microReactApp',
    entry: 'http://localhost:3001',
    container: '#microapp',
    activeRule: '/micro-react-app',
    props: { 
      msg: 'Hello from main app'
    }
  },
  {
    name: 'microVueApp',
    entry: 'http://localhost:3002',
    container: '#microapp',
    activeRule: '/micro-vue-app'
  }
];

export const microAppLifeCycles: FrameworkLifeCycles<ObjectType> = {
  beforeLoad: (app: LifeCycleFn<ObjectType>) => console.log('before load app.name:>> ', app.name),
  afterMount: (app: LifeCycleFn<ObjectType>) => console.log('after mount app.name:>> ', app, app.name)
}

export const microConfig: FrameworkConfiguration = {
  sandbox: {
    // strictStyleIsolation: true,
    experimentalStyleIsolation: true
  }
}

export default MicroApps;
