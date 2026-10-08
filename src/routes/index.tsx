import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Compass,
  FileText,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  PenTool,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

type Category = "all" | "stanovanjsko" | "javno" | "poslovno";

const projects: {
  title: string;
  year: string;
  note: string;
  category: Exclude<Category, "all">;
  image: string;
}[] = [
  {
    title: "Hiša v gozdu",
    year: "2015",
    note: "Enodružinska hiša z delno vkopano kletjo",
    category: "stanovanjsko",
    image: "/projects/gozd.jpg",
  },
  {
    title: "Športna dvorana Bonifika",
    year: "2012",
    note: "Multifunkcijska športna dvorana — natečaj",
    category: "javno",
    image: "/projects/bonifika.jpg",
  },
  {
    title: "Mercator Novo mesto",
    year: "2012",
    note: "Trgovski center",
    category: "poslovno",
    image: "/projects/mercator.jpg",
  },
  {
    title: "Mladinski center Trbovlje",
    year: "2011",
    note: "Mladinski center in hotel",
    category: "javno",
    image: "/projects/trbovlje.jpg",
  },
  {
    title: "Pasivna lesena hiša",
    year: "2011",
    note: "Energetsko učinkovita stanovanjska gradnja",
    category: "stanovanjsko",
    image: "/projects/pasivna.jpg",
  },
  {
    title: "Študentski dom Ptič",
    year: "2015",
    note: "Prenova študentskega doma Portorož",
    category: "javno",
    image: "/projects/ptic.jpg",
  },
  {
    title: "Poslovni prostori Dimnikcobau",
    year: "2012",
    note: "Notranja ureditev poslovnih prostorov",
    category: "poslovno",
    image: "/projects/dimnik.jpg",
  },
  {
    title: "Mrliška vežica Sveta gora",
    year: "2016",
    note: "Zasavska Sveta gora",
    category: "javno",
    image: "/projects/gora.jpg",
  },
];

const services = [
  {
    icon: FileText,
    title: "Projektna dokumentacija",
    text: "Od idejne zasnove do izvedbenih projektov za zahtevne in manj zahtevne objekte.",
  },
  {
    icon: Compass,
    title: "OPPN dokumentacija",
    text: "Priprava dokumentacije za občinske podrobne prostorske načrte in prostorsko planiranje.",
  },
  {
    icon: PenTool,
    title: "Notranje oblikovanje",
    text: "Celovit interier — od koncepta do izvedbe, s poudarkom na funkciji in materialu.",
  },
  {
    icon: ShieldCheck,
    title: "Gradbena dovoljenja",
    text: "Vodenje postopka in priprava dokumentacije za pridobitev gradbenega dovoljenja.",
  },
  {
    icon: LayoutGrid,
    title: "Izvedbeni projekti",
    text: "Podrobni projekti za gradnjo, prenove in adaptacije.",
  },
  {
    icon: MapPin,
    title: "Projektantski nadzor",
    text: "Nadzor nad izvedbo del ter dokumentacija za prevzem objekta.",
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "Vse" },
  { id: "stanovanjsko", label: "Stanovanjsko" },
  { id: "javno", label: "Javno" },
  { id: "poslovno", label: "Poslovno" },
];

const links = [
  { href: "#domov", label: "Domov" },
  { href: "#o-nas", label: "O nas" },
  { href: "#storitve", label: "Storitve" },
  { href: "#projekti", label: "Projekti" },
  { href: "#novice", label: "Novice" },
  { href: "#kontakt", label: "Kontakt" },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Category>("all");
  const [sent, setSent] = useState(false);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#domov" className="font-display text-3xl tracking-wide text-fg">
            FIN<span className="text-accent">ARS</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-widest text-muted hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-line text-fg md:hidden"
            aria-label={open ? "Zapri meni" : "Odpri meni"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-line px-5 py-4 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-2 py-3 text-sm uppercase tracking-widest text-fg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="domov" className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/projects/hero.jpg"
          alt="Sodobna hiša v gozdu ob mraku"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 py-16 md:justify-center">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Center za arhitekturo
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-none text-fg md:text-7xl">
            Oblikujemo prostore, ki <em className="text-accent">živijo</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-muted">
            Fin Ars d.o.o. je arhitekturni biro z več kot 20 leti izkušenj. Od
            stanovanjskih hiš do javnih objektov — premišljena, trajnostna arhitektura.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projekti"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-accent px-6 text-sm font-medium uppercase tracking-widest text-ink"
            >
              Naši projekti
            </a>
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-line px-6 text-sm font-medium uppercase tracking-widest text-fg"
            >
              Stopite v stik
            </a>
          </div>
        </div>
      </section>

      <section id="o-nas" className="bg-bg-alt py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">O nas</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Arhitekturni biro z dušo</h2>
            <p className="mt-5 font-light text-muted">
              Fin Ars d.o.o. je nastal leta 2006 v Zagorju ob Savi. Vodji biroja sta
              Kristijan Čuk, u.d.i.a. (strokovni direktor) in Borut Dolar (poslovni direktor).
            </p>
            <p className="mt-4 font-light text-muted">
              Ekipo dopolnjujejo Urša Dirjec Meško, Irena Gorjup Gračner, Simon Škrbec,
              Dijana Subašič, Vladimir Mladenović ter poslovna sekretarka Špela Volaj.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["20+", "Let izkušenj"],
                ["100+", "Projektov"],
                ["6", "Strokovnjakov"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-4xl text-accent">{n}</dt>
                  <dd className="mt-1 text-sm text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="overflow-hidden rounded-card border border-line">
            <img
              src="/projects/dimnik.jpg"
              alt="Notranjost sodobnega poslovnega prostora"
              className="aspect-[4/5] w-full object-cover md:aspect-[4/5]"
            />
          </figure>
        </div>
      </section>

      <section id="storitve" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Storitve</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Kaj delamo</h2>
          <p className="mt-4 max-w-xl font-light text-muted">
            Celovite arhitekturne in projektantske storitve — od zasnove do nadzora.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-card border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <s.icon className="text-accent" size={22} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 font-light text-muted">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projekti" className="bg-bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Portfolio</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Izbrani projekti</h2>
          <p className="mt-4 max-w-xl font-light text-muted">
            Stanovanjske hiše, javni objekti in trgovski centri. Fotografije so
            atmosferski prikazi, ne arhivski posnetki objektov.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`h-11 rounded-full border px-5 text-sm ${
                  filter === f.id
                    ? "border-accent bg-accent text-ink"
                    : "border-line text-muted"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {visible.map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-card border border-line"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <p className="text-xs uppercase tracking-widest text-accent">{p.year}</p>
                  <h3 className="font-display text-3xl">{p.title}</h3>
                  <p className="text-sm text-muted">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="novice" className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Novice</p>
          <h2 className="mt-3 font-display text-4xl">Digitalna transformacija</h2>
          <article className="mt-8 rounded-card border border-line bg-surface p-6 md:p-8">
            <p className="text-xs uppercase tracking-widest text-accent">2022</p>
            <h3 className="mt-3 font-display text-3xl">
              Projekt »Digitalna transformacija podjetja FIN ARS« je prejel EU sofinanciranje
            </h3>
            <p className="mt-4 font-light text-muted">
              Naložba podpira digitalizacijo poslovanja, kompetence zaposlenih ter energetsko
              in snovno učinkovitejše procese. Sofinanciranje znaša do 100.000 EUR.
            </p>
            <p className="mt-4 border-l-2 border-accent pl-4 text-sm text-muted">
              Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega
              sklada za regionalni razvoj.
            </p>
          </article>
        </div>
      </section>

      <section id="kontakt" className="bg-bg-alt py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Kontakt</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Stopite v stik</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-accent" size={18} />
                <span>
                  Podvine 36
                  <br />
                  1410 Zagorje ob Savi
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 shrink-0 text-accent" size={18} />
                <a href="mailto:info@finars.si" className="hover:text-accent">
                  info@finars.si
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 shrink-0 text-accent" size={18} />
                <span>
                  Kristijan Čuk ·{" "}
                  <a href="tel:+38641686959" className="hover:text-accent">
                    +386 41 686 959
                  </a>
                  <br />
                  Borut Dolar ·{" "}
                  <a href="tel:+38631370172" className="hover:text-accent">
                    +386 31 370 172
                  </a>
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Davčna št. 70790817 · Matična št. 2144921000
            </p>
          </div>

          {sent ? (
            <div className="flex min-h-72 items-center rounded-card border border-line bg-surface p-8">
              <div>
                <h3 className="font-display text-3xl">Hvala.</h3>
                <p className="mt-3 font-light text-muted">
                  Sporočilo je zabeleženo v tem predogledu. Za pravi stik pišite na
                  info@finars.si.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="rounded-card border border-line bg-surface p-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block text-sm text-muted" htmlFor="name">
                Ime
                <input
                  id="name"
                  required
                  className="mt-1 h-12 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-accent"
                />
              </label>
              <label className="mt-4 block text-sm text-muted" htmlFor="email">
                E-pošta
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 h-12 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-accent"
                />
              </label>
              <label className="mt-4 block text-sm text-muted" htmlFor="message">
                Sporočilo
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-md border border-line bg-bg px-3 py-3 text-fg outline-none focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="mt-5 h-12 w-full rounded-sm bg-accent text-sm font-medium uppercase tracking-widest text-ink"
              >
                Pošlji sporočilo
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl text-fg">
            FIN<span className="text-accent">ARS</span>
          </p>
          <p>© 2006–2026 Fin Ars d.o.o. Vse pravice pridržane.</p>
        </div>
      </footer>
    </div>
  );
}
