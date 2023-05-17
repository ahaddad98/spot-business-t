import Amentis from "./component/Amentis";
import Calendar from "./component/Calendar";
import Header from "./component/Header";
import ListImages from "./component/ListImages";

export default function Home() {
  return (
    <main className="flex flex-col mb-[30px]">
      <Header />
      <div className="mt-[72px] flex flex-col gap-[72px]">
        <ListImages />
      </div>
    </main>
  );
}
