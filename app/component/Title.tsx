export default function Title({title, number}: {title: string, number: string}) {
  return (
    <div className="w-[864px] border-t-[1px] border-solid border-black mt-[75px] flex gap-2">
      <div className="mt-[24px] font-bold  text-base leading-6 text-woodsmoke">{number}</div>
      <div className="border-l-[1px] h-2 border-black"></div>
      <div className="mt-[24px] font-bold text-base leading-6 text-woodsmoke">{title}</div>
    </div>
  );
}
