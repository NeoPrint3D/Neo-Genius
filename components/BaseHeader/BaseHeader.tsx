import Wrapper from "./Wrapper";

export default function BaseHeader() {
  return (
    <Wrapper>
      <p className="font-mono text-4xl font-black">Neo Genius</p>
      <div className="flex justify-end gap-5">
        <button className="font-poppins text-xl">Login</button>
        <button className="rounded-[1.5rem] bg-black px-5 py-2 font-poppins text-xl text-white  shadow-xl">
          Sign Up
        </button>
      </div>
    </Wrapper>
  );
}
