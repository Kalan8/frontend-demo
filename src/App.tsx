import { ThemeToggle } from "./components/ThemeToggle";
import PlayerRegistrationPage from "./pages/PlayerRegistrationPage";

function App() {
  return (
    <main className="min-h-screen">
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <PlayerRegistrationPage />
    </main>
  );
}
export default App;