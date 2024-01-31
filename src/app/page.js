
import Category from "./Component/Category/Category";
import SideNav from "./Component/SideNav/SideNav";

export default function Home() {
  return (
    <div className=" h-auto  bg-base-200 p-5 ">
      <div>
        navbar
      </div>
      <div className="flex gap-6   ">

        <SideNav></SideNav>

        <div className="pt-16">
          <Category></Category>
        </div>
        <div>
          Dua
        </div>
      </div>
    </div>
  );
}
