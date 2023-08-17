import { CgMenuRight } from "react-icons/cg";
function Header() {
  return (
    <header className="common">
      <div className="wrapper">
        <h1 className="text-xl font-bold">Travelopia</h1>
        <button>
          <CgMenuRight className="text-2xl" />
        </button>
      </div>
    </header>
  );
}

export default Header;
