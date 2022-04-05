import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-20 w-20 mx-auto hidden lg:inline-grid">
          <img
            layout="fill"
            objectFit="cover"
            className="rounded"
            src="https://static.wikia.nocookie.net/8487e340-07ec-4749-93d2-e82854f0516e/scale-to-width/755"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-20 w-48 sm:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the Metaverse</h1>

          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;