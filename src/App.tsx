import HomePage from "./pages/home.tsx";
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p className="text-2xl text-amber-700">Mur Paragraph test tailwindCSS</p>
          <p>Home content</p>
            <HomePage />
      </div>
    </>
  )
}

export default App