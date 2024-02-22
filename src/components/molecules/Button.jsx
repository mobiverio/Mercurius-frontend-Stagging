export default function Button({ btn }) {
  return (
    <button className="border p-2 rounded-md bg-black text-white mx-auto flex flex-row items-center my-10 hover:bg-[#333] transition animate-bounce">
      {btn}
    </button>
  );
}
