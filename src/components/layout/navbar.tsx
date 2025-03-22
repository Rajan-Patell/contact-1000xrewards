import { cn } from "@/lib/utils";

interface NavLinkProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

function NavLink({ children, active, className }: NavLinkProps) {
  return (
    <div
      className={cn(
        "flex min-h-10 flex-col overflow-hidden items-stretch justify-center rounded-[100px]",
        className,
      )}
    >
      <div className="flex w-full items-center gap-2 justify-center flex-1 h-full px-3 py-2.5">
        <div
          className={cn(
            "self-stretch my-auto",
            active ? "text-[#AA3700]" : "opacity-[0.38]",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <div className="bg-white flex min-h-[72px] w-full items-center gap-[40px_100px] text-sm font-medium whitespace-nowrap tracking-[0.1px] leading-none justify-between flex-wrap h-[72px] px-7 py-4 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 min-h-9 items-center gap-1 text-[27px] text-[#AA3700] font-bold tracking-[-1.08px] leading-none my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/c1cc0aa78e5a342af12ab57ed52ffe6c3974c6d7?placeholderIfAbsent=true"
          alt="1000X Rewards Logo"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch w-[209px] my-auto">1000XRewards</div>
      </div>

      <nav className="self-stretch flex min-w-60 gap-[34px] text-[#271813] text-center my-auto max-md:max-w-full">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Help</NavLink>
        <NavLink active className="text-[#AA3700]">
          Contact
        </NavLink>
        <NavLink>Legal</NavLink>
      </nav>

      <div className="self-stretch flex items-center gap-2 text-center my-auto">
        <button className="border self-stretch flex min-h-10 flex-col overflow-hidden items-stretch text-[#AA3700] justify-center w-[86px] my-auto rounded-[100px] border-[#8E7067] border-solid">
          <div className="self-stretch w-full gap-2 flex-1 h-full px-6 py-2.5 max-md:px-5">
            Login
          </div>
        </button>
        <button className="bg-[#AA3700] self-stretch flex min-h-10 flex-col overflow-hidden items-stretch text-white justify-center w-[97px] my-auto rounded-[100px]">
          <div className="self-stretch w-full gap-2 flex-1 h-full px-6 py-2.5 max-md:px-5">
            Register
          </div>
        </button>
      </div>
    </div>
  );
}
