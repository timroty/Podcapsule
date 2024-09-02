import Image from "next/image";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src={`/logo-light.png`}
              alt={"Podcapsule logo"}
              width="22"
              height="22"
            />
            <span>Podcapsule</span>
          </div>
          <Link
            href="/login"
            className="bg-foreground/10 px-4 py-2 rounded-md hover:bg-foreground/20"
          >
            Login / Signup
          </Link>
        </div>
      </nav>

      <section className="w-full max-w-2xl mx-auto flex flex-col lg:flex-row items-center justify-center py-8 lg:py-16">
        <div className="lg:w-1/2 lg:order-1 lg:pr-16 order-1">
          <p className="text-5xl font-bold leading-tight">Discover.</p>
          <p className="text-5xl font-bold leading-tight">Rediscover.</p>
          <p className="text-5xl font-bold leading-tight">Listen.</p>
        </div>
        <div className="lg:w-1/2 lg:order-2 lg:pl-16 lg:mt-0 mt-12 order-2">
          <Image
            src={"/logo-light.png"}
            alt={"Podcapsule logo"}
            width={300}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>Podcapsule &copy; 2024</p>
      </footer>
    </div>
  );
}
