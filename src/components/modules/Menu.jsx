import MenuItem from "../common/MenuItem";
function Menu({ mobile = false }) {
  return (
    <div>
      <ul
        className={
          mobile
            ? "flex flex-col gap-8 mt-10"
            : "hidden md:flex w-xl justify-between mr-30 size-4"
        }
      >
        <MenuItem mobile={mobile}/>
      </ul>
    </div>
  );
}

export default Menu;
