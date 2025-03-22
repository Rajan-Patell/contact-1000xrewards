export function ContactInfo() {
  return (
    <div className="bg-[rgba(255,241,236,1)] self-stretch min-w-60 min-h-[319px] overflow-hidden w-[837px] my-auto p-[42px] rounded-[32px] max-md:max-w-full max-md:px-5">
      <h2 className="text-[rgba(39,24,19,1)] text-[42px] font-bold leading-none max-md:max-w-full">
        Connect
      </h2>
      <div className="w-full text-xl text-[rgba(91,65,56,1)] font-medium mt-[86px] max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-2 flex-wrap max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/1d48e34602a12650da1192a6047340b35f50d089?placeholderIfAbsent=true"
            alt="Location"
            className="aspect-[1] object-contain w-[26px] shrink-0"
          />
          <div className="flex-1 shrink basis-[0%] max-md:max-w-full">
            601, Grace Business Park, Sola
            <br />
            Ahmedabad (Gujarat) 380060
          </div>
        </div>
        <div className="flex w-full items-center gap-2 whitespace-nowrap flex-wrap mt-3.5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/1a874a8e0a6b470d8413dc615517b8c1f30d20f1?placeholderIfAbsent=true"
            alt="Email"
            className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch my-auto">info@1000xrewards.com</div>
        </div>
        <div className="flex w-full items-center gap-2 whitespace-nowrap flex-wrap mt-3.5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/c57c06502cef40688c1ad4fba079ebcf85dbb6eb?placeholderIfAbsent=true"
            alt="Phone"
            className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch my-auto">9000993693</div>
        </div>
      </div>
    </div>
  );
}
