import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactInfo } from "@/components/contact/contact-info";
import { SocialMedia } from "@/components/contact/social-media";
import { GradientText } from "@/components/ui/gradient-text";

const Index = () => {
  return (
    <div className="bg-white relative overflow-hidden rounded-[18px]">
      <Navbar />

      <main className="z-0 flex w-full flex-col items-center justify-center pt-[260px] pb-60 px-60 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <div className="w-[1127px] max-w-full">
          <div className="flex w-full flex-col items-stretch text-[80px] font-bold tracking-[-1.6px] justify-center max-md:max-w-full max-md:text-[40px]">
            <GradientText className="max-md:max-w-full max-md:text-[40px]">
              Get in touch
            </GradientText>
          </div>
          <p className="text-[#5B4138] text-base font-normal leading-6 tracking-[0.5px] mt-6 max-md:max-w-full">
            Have questions or need assistance? Our support team is here to help!
            Reach out to us through any of the following channels, and we'll get
            back to you promptly.
          </p>
        </div>

        <div className="flex items-center gap-9 flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          <ContactInfo />
          <SocialMedia />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
