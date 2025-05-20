import Navbar from './components/Navbar'
export default function Hello(){
  return(
    <div>
      <Navbar />
      <h1 className="text-4xl text-center text-rose-500 bg-yellow-200">这是来自自定义组件的内容</h1>
    </div>
  )
}
