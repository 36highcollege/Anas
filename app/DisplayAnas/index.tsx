import Link from "next/link";
interface DispalyAnasType {
  label: string;
  path?: string;
  child?: Array<DispalyAnasType>;
}
const DisplayAnas: Array<DispalyAnasType> = [
  {
    label: "Home",
    path: "/about",
    child: [
      {
        label: "Home1",
        path: "/",
      },
      {
        label: "Home1",
        path: "/",
      },
    ],
  },
  {
    label: "About",
    path: "/",
  },
  {
    label: "Blog",
    path: "/",
  },
  {
    label: "Contact",
    path: "/",
  },
  {
    label: "Web 3.0",
    path: "",
  },
];
export default function Orrinal() {
  return (
    <>
      {DisplayAnas.map((item: any) => (
        <>
          <div className="hidden sm:flex hover:-mt-3 transition-all duration-500 hover:text-Anas-400">
            <Link href={item.path ? item.path : "/"}>{item.label}</Link>
          </div>
        </>
      ))}
    </>
  );
}
