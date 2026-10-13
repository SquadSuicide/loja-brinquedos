const Header = () => {
  return (
    <>
      <div className="fixed bg-site-pastelpetal w-screen py-6 px-12 rounded-2xl shadow-2xl/30 text-white font-bold">
        <div className="flex justify-between items-center">
            <h1 className="p-2 bg-black rounded-full">Logo</h1>
        <ul className="flex justify-around items-center w-1/2 text-[18px]">
            <li className="bg-site-pinkorchid px-3 py-1.5 rounded-4xl shadow-lg/10 hover:-translate-y-0.5 hover:shadow-purple-950 hover:shadow-xl/30 hover:cursor-pointer transition-all">Contato</li>
            <li className="bg-site-pinkorchid px-3 py-1.5 rounded-4xl shadow-lg/10 hover:-translate-y-0.5 hover:shadow-purple-950 hover:shadow-xl/30 hover:cursor-pointer transition-all">Sobre</li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Header
