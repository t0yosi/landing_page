export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-amber-500 to-pink-500 shadow-[0px_0px_12px_orange]">
      <div className="absolute inset ">
        <div className="border border-white/20 absolute inset [mask-image:linear-gradient(to_bottom,black,transparent)] "></div>
        <div className="border border-white/40 absolute inset [mask-image:linear-gradient(to_top,black,transparent)] "></div>
        <div className="absolute inset-0 shadow-[l0_0_10px_rgb(140,69,255,.7)_inset] "></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};
