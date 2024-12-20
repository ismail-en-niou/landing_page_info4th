import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Infom4th
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/infom4th/"
              className="opacity-60 hover:opacity-100"
            >
              instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/infom4th/?originalSubdomain=ma"
              className="opacity-60 hover:opacity-100"
            >
              linkedin
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://chat.whatsapp.com/Ib3SEN96J21AlCi2fJwzzZ"
              className="opacity-60 hover:opacity-100"
            >
              whatsapp
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="infom4th.robixe.online"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://chat.whatsapp.com/Ib3SEN96J21AlCi2fJwzzZ"
              className="opacity-60 hover:opacity-100"
            >
              whatsapp
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/XXQrUycZ"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Landing page made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.robixe.online"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            robixe.online
          </a>
        </h3>
      </section>
    </footer>
  );
};
