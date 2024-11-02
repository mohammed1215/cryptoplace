import logo from "../images/logo.png";
export const Header = ({ setCoin_Type }) => {
  return (
    <header className="py-4 border-b-2 border-b-[#3c3c3c]">
      <div className="container flex justify-between">
        <div className="img-holder">
          <img src={logo} alt="" />
        </div>
        <nav className="content-center">
          <ul className="flex gap-3 ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Blogs</li>
          </ul>
        </nav>
        <div className="interactions-menu space-x-2">
          <select
            name=""
            id=""
            className="coin bg-transparent border border-white rounded text-sm px-2 py-1"
            onChange={(e) => {
              setCoin_Type(e.target.value);
            }}
          >
            <option className="bg-transparent" value="usd">
              USD
            </option>
            <option className="bg-transparent" value="eur">
              EUR
            </option>
            <option className="bg-transparent" value="inr">
              INR
            </option>
          </select>
          <button className="sign-up text-black py-2 px-4 bg-white rounded-full">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
