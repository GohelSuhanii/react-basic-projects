import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import UserCard from "./components/UserCard";
function App() {
  const users = [
    {
      name: "John Doe",
      age: 30,
      email: "jdoe@me.com",
      isOnline: true,
    },
    {
      name: "Jane Doe",
      age: 25,
      email: "jane@me.com",
      isOnline: false,
    },
    {
      name: "Jane Doe",
      age: 25,
      email: "jane@me.com",
      isOnline: false,
    },
  ];
  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-col">
        <Header />
        <div className="bg-gray-500 p-7">
          <h1 className="text-0.5xl font-bold mb-6 text-center">User Cards:</h1>
        </div>
        <div className="bg-white p-10 rounded-lg shadow-lg grid grid-cols-3 gap-4">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              email={user.email}
              isOnline={user.isOnline}
            />
          ))}
        </div>
        <Main />

        <Footer />
      </div>
    </>
  );
}

export default App;
