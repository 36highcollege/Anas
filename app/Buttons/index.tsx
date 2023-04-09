export default function Buttion(props: any) {
  const { item } = props;
  return (
    <>
      <button className="w-30 h-11 rounded-l bg-gradient-to-l  from-blue-500 to-red-300  bg-blue-400  px-6 py-1 hover:scale-90  transition-all duration-400 border-4">
        {item}
      </button>
    </>
  )
}