import MyPapers from "../__components/MyPapers";
import Notification from "../__components/Notification";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 mt-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          My Research Papers
        </h1>
        <MyPapers />
        <Notification />
      </div>
    </div>
  );
}
