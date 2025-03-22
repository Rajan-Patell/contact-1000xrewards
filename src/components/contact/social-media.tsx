export function SocialMedia() {
  return (
    <div className="bg-[rgba(255,241,236,1)] self-stretch flex min-w-60 items-stretch gap-2.5 justify-center w-[255px] my-auto p-[42px] rounded-[32px] max-md:px-5">
      <div className="flex w-[62px] flex-col items-center justify-center">
        <div className="flex w-full gap-2 p-2 rounded-xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/6407b6e53bb21b2785ccb9f054af0f3deaa990e5?placeholderIfAbsent=true"
            alt="Social Media 1"
            className="aspect-[1] object-contain w-[46px]"
          />
        </div>
        <div className="flex w-full gap-2 mt-6 p-2 rounded-xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/3442364f8cc59882c6317f2f6e36f1ca97607653?placeholderIfAbsent=true"
            alt="Social Media 2"
            className="aspect-[1] object-contain w-[46px]"
          />
        </div>
        <div className="flex w-full gap-2 mt-6 p-2 rounded-xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/fcfb863548287943a03bc8bd50a668af2cf3e102?placeholderIfAbsent=true"
            alt="Social Media 3"
            className="aspect-[1] object-contain w-[46px]"
          />
        </div>
      </div>
    </div>
  );
}
