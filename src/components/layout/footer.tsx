interface FooterLinkColumnProps {
  title: string;
  links: string[];
}

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div className="w-48">
      <div className="text-[#271813] text-[22px] font-bold leading-none tracking-[0px]">
        {title}
      </div>
      {links.map((link, index) => (
        <div key={index} className="mt-2">
          {link}
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-[rgba(255,226,217,1)] flex min-h-[381px] w-full items-stretch gap-[40px_48px] flex-wrap p-16 max-md:max-w-full max-md:px-5">
      <div className="flex min-w-60 flex-col justify-between flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="flex min-h-[69px] items-center gap-[9px] text-[52px] text-[rgba(170,55,0,1)] font-bold whitespace-nowrap tracking-[-2.07px] leading-none max-md:max-w-full max-md:text-[40px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/94886cb363af6ce8004717e41d413c478895cb98?placeholderIfAbsent=true"
            alt="1000X Rewards Logo"
            className="aspect-[1] object-contain w-[69px] self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch my-auto max-md:text-[40px]">
            1000XRewards
          </div>
        </div>
        <div className="flex gap-3 mt-[140px] max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/765eba5b97ad23313de388adc14437c234e56070?placeholderIfAbsent=true"
            alt="Social Icon 1"
            className="aspect-[1] object-contain w-11 shrink-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/3a968338bff1e5ed7a6819db0a95ebd723f04b4d?placeholderIfAbsent=true"
            alt="Social Icon 2"
            className="aspect-[1.02] object-contain w-[45px] shrink-0"
          />
        </div>
      </div>

      <div className="flex min-w-60 items-stretch gap-6 text-sm text-[#5B4138] font-medium tracking-[0.1px] leading-none flex-wrap h-full max-md:max-w-full">
        <FooterLinkColumn title="Company" links={["About Us", "Careers"]} />
        <FooterLinkColumn
          title="Support"
          links={["Help Center", "Contact Us"]}
        />
        <FooterLinkColumn
          title="Legal"
          links={[
            "Terms of Condition",
            "Privacy Policy",
            "Security",
            "Guidelines",
            "Community guidelines",
          ]}
        />
      </div>
    </div>
  );
}
