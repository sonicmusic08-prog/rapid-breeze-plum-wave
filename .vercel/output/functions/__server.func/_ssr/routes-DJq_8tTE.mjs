import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PenTool, c as Mail, d as Compass, i as Phone, l as LayoutGrid, o as Menu, r as ShieldCheck, s as MapPin, t as X, u as FileText } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJq_8tTE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		title: "Hiša v gozdu",
		year: "2015",
		note: "Enodružinska hiša z delno vkopano kletjo",
		category: "stanovanjsko",
		image: "/projects/gozd.jpg"
	},
	{
		title: "Športna dvorana Bonifika",
		year: "2012",
		note: "Multifunkcijska športna dvorana — natečaj",
		category: "javno",
		image: "/projects/bonifika.jpg"
	},
	{
		title: "Mercator Novo mesto",
		year: "2012",
		note: "Trgovski center",
		category: "poslovno",
		image: "/projects/mercator.jpg"
	},
	{
		title: "Mladinski center Trbovlje",
		year: "2011",
		note: "Mladinski center in hotel",
		category: "javno",
		image: "/projects/trbovlje.jpg"
	},
	{
		title: "Pasivna lesena hiša",
		year: "2011",
		note: "Energetsko učinkovita stanovanjska gradnja",
		category: "stanovanjsko",
		image: "/projects/pasivna.jpg"
	},
	{
		title: "Študentski dom Ptič",
		year: "2015",
		note: "Prenova študentskega doma Portorož",
		category: "javno",
		image: "/projects/ptic.jpg"
	},
	{
		title: "Poslovni prostori Dimnikcobau",
		year: "2012",
		note: "Notranja ureditev poslovnih prostorov",
		category: "poslovno",
		image: "/projects/dimnik.jpg"
	},
	{
		title: "Mrliška vežica Sveta gora",
		year: "2016",
		note: "Zasavska Sveta gora",
		category: "javno",
		image: "/projects/gora.jpg"
	}
];
var services = [
	{
		icon: FileText,
		title: "Projektna dokumentacija",
		text: "Od idejne zasnove do izvedbenih projektov za zahtevne in manj zahtevne objekte."
	},
	{
		icon: Compass,
		title: "OPPN dokumentacija",
		text: "Priprava dokumentacije za občinske podrobne prostorske načrte in prostorsko planiranje."
	},
	{
		icon: PenTool,
		title: "Notranje oblikovanje",
		text: "Celovit interier — od koncepta do izvedbe, s poudarkom na funkciji in materialu."
	},
	{
		icon: ShieldCheck,
		title: "Gradbena dovoljenja",
		text: "Vodenje postopka in priprava dokumentacije za pridobitev gradbenega dovoljenja."
	},
	{
		icon: LayoutGrid,
		title: "Izvedbeni projekti",
		text: "Podrobni projekti za gradnjo, prenove in adaptacije."
	},
	{
		icon: MapPin,
		title: "Projektantski nadzor",
		text: "Nadzor nad izvedbo del ter dokumentacija za prevzem objekta."
	}
];
var filters = [
	{
		id: "all",
		label: "Vse"
	},
	{
		id: "stanovanjsko",
		label: "Stanovanjsko"
	},
	{
		id: "javno",
		label: "Javno"
	},
	{
		id: "poslovno",
		label: "Poslovno"
	}
];
var links = [
	{
		href: "#domov",
		label: "Domov"
	},
	{
		href: "#o-nas",
		label: "O nas"
	},
	{
		href: "#storitve",
		label: "Storitve"
	},
	{
		href: "#projekti",
		label: "Projekti"
	},
	{
		href: "#novice",
		label: "Novice"
	},
	{
		href: "#kontakt",
		label: "Kontakt"
	}
];
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [sent, setSent] = (0, import_react.useState)(false);
	const visible = projects.filter((p) => filter === "all" || p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line/60 bg-bg/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#domov",
							className: "font-display text-3xl tracking-wide text-fg",
							children: ["FIN", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "ARS"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 md:flex",
							children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								className: "text-sm uppercase tracking-widest text-muted hover:text-fg",
								children: l.label
							}, l.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-11 w-11 place-items-center rounded-md border border-line text-fg md:hidden",
							"aria-label": open ? "Zapri meni" : "Odpri meni",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-1 border-t border-line px-5 py-4 md:hidden",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-md px-2 py-3 text-sm uppercase tracking-widest text-fg",
						onClick: () => setOpen(false),
						children: l.label
					}, l.href))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "domov",
				className: "relative min-h-[88vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/projects/hero.jpg",
						alt: "Sodobna hiša v gozdu ob mraku",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 py-16 md:justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" }), "Center za arhitekturo"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "max-w-3xl font-display text-5xl leading-none text-fg md:text-7xl",
								children: ["Oblikujemo prostore, ki ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-accent",
									children: "živijo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg font-light text-muted",
								children: "Fin Ars d.o.o. je arhitekturni biro z več kot 20 leti izkušenj. Od stanovanjskih hiš do javnih objektov — premišljena, trajnostna arhitektura."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#projekti",
									className: "inline-flex h-12 items-center justify-center rounded-sm bg-accent px-6 text-sm font-medium uppercase tracking-widest text-ink",
									children: "Naši projekti"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#kontakt",
									className: "inline-flex h-12 items-center justify-center rounded-sm border border-line px-6 text-sm font-medium uppercase tracking-widest text-fg",
									children: "Stopite v stik"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "o-nas",
				className: "bg-bg-alt py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-accent",
							children: "O nas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl md:text-5xl",
							children: "Arhitekturni biro z dušo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-light text-muted",
							children: "Fin Ars d.o.o. je nastal leta 2006 v Zagorju ob Savi. Vodji biroja sta Kristijan Čuk, u.d.i.a. (strokovni direktor) in Borut Dolar (poslovni direktor)."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-light text-muted",
							children: "Ekipo dopolnjujejo Urša Dirjec Meško, Irena Gorjup Gračner, Simon Škrbec, Dijana Subašič, Vladimir Mladenović ter poslovna sekretarka Špela Volaj."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-10 grid grid-cols-3 gap-4",
							children: [
								["20+", "Let izkušenj"],
								["100+", "Projektov"],
								["6", "Strokovnjakov"]
							].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-4xl text-accent",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm text-muted",
								children: l
							})] }, l))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-card border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/projects/dimnik.jpg",
							alt: "Notranjost sodobnega poslovnega prostora",
							className: "aspect-[4/5] w-full object-cover md:aspect-[4/5]"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "storitve",
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-accent",
							children: "Storitve"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl md:text-5xl",
							children: "Kaj delamo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl font-light text-muted",
							children: "Celovite arhitekturne in projektantske storitve — od zasnove do nadzora."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "text-accent",
										size: 22,
										strokeWidth: 1.5
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-2xl",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-light text-muted",
										children: s.text
									})
								]
							}, s.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "projekti",
				className: "bg-bg-alt py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-accent",
							children: "Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl md:text-5xl",
							children: "Izbrani projekti"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl font-light text-muted",
							children: "Stanovanjske hiše, javni objekti in trgovski centri. Fotografije so atmosferski prikazi, ne arhivski posnetki objektov."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setFilter(f.id),
								className: `h-11 rounded-full border px-5 text-sm ${filter === f.id ? "border-accent bg-accent text-ink" : "border-line text-muted"}`,
								children: f.label
							}, f.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 sm:grid-cols-2",
							children: visible.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group relative overflow-hidden rounded-card border border-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.title,
										className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-0 p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs uppercase tracking-widest text-accent",
												children: p.year
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-3xl",
												children: p.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted",
												children: p.note
											})
										]
									})
								]
							}, p.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "novice",
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-accent",
							children: "Novice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl",
							children: "Digitalna transformacija"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-8 rounded-card border border-line bg-surface p-6 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-accent",
									children: "2022"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl",
									children: "Projekt »Digitalna transformacija podjetja FIN ARS« je prejel EU sofinanciranje"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-light text-muted",
									children: "Naložba podpira digitalizacijo poslovanja, kompetence zaposlenih ter energetsko in snovno učinkovitejše procese. Sofinanciranje znaša do 100.000 EUR."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 border-l-2 border-accent pl-4 text-sm text-muted",
									children: "Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni razvoj."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "kontakt",
				className: "bg-bg-alt py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-accent",
							children: "Kontakt"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl md:text-5xl",
							children: "Stopite v stik"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 shrink-0 text-accent",
										size: 18
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Podvine 36",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"1410 Zagorje ob Savi"
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "mt-0.5 shrink-0 text-accent",
										size: 18
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:info@finars.si",
										className: "hover:text-accent",
										children: "info@finars.si"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "mt-0.5 shrink-0 text-accent",
										size: 18
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Kristijan Čuk ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+38641686959",
											className: "hover:text-accent",
											children: "+386 41 686 959"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Borut Dolar ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+38631370172",
											className: "hover:text-accent",
											children: "+386 31 370 172"
										})
									] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted",
							children: "Davčna št. 70790817 · Matična št. 2144921000"
						})
					] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-72 items-center rounded-card border border-line bg-surface p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: "Hvala."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-light text-muted",
							children: "Sporočilo je zabeleženo v tem predogledu. Za pravi stik pišite na info@finars.si."
						})] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "rounded-card border border-line bg-surface p-6",
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm text-muted",
								htmlFor: "name",
								children: ["Ime", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									required: true,
									className: "mt-1 h-12 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-accent"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-4 block text-sm text-muted",
								htmlFor: "email",
								children: ["E-pošta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									type: "email",
									required: true,
									className: "mt-1 h-12 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-accent"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-4 block text-sm text-muted",
								htmlFor: "message",
								children: ["Sporočilo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									required: true,
									rows: 5,
									className: "mt-1 w-full rounded-md border border-line bg-bg px-3 py-3 text-fg outline-none focus:border-accent"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "mt-5 h-12 w-full rounded-sm bg-accent text-sm font-medium uppercase tracking-widest text-ink",
								children: "Pošlji sporočilo"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl text-fg",
						children: ["FIN", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "ARS"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2006–2026 Fin Ars d.o.o. Vse pravice pridržane." })]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
