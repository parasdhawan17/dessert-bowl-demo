"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const tiles = [
  {
    id: 1,
    label: "Durian Mousse",
    detail:
      "Our icon since 2008 — silky chilled mousse crowned with real D24 pulp.",
    price: "S$7.80",
    tag: "Durian",
    src: "./images/hero-durian-mousse.jpg",
  },
  {
    id: 2,
    label: "Mango Pomelo (杨枝甘露)",
    detail:
      "Hong Kong-style — fresh mango, pomelo sacs, sago pearls, coconut milk.",
    price: "S$7.30",
    tag: "Mango & Fruit",
    src: "./images/mango-pomelo-sago.jpg",
  },
  {
    id: 3,
    label: "Black Glutinous Rice with Coconut Ice Cream",
    detail: "Chewy black glutinous rice with a melting scoop of coconut ice cream.",
    price: "S$6.70",
    tag: "Mango & Fruit",
    src: "./images/black-glutinous-rice.jpg",
  },
  {
    id: 4,
    label: "Snow Pear White Fungus",
    detail: "Nourishing and gently sweet — served hot or cold.",
    price: "S$6.70",
    tag: "Hot Tong Sui",
    src: "./images/snow-pear-tong-sui.jpg",
  },
];

const ALL_TAG = "All";
const tags = [ALL_TAG, ...Array.from(new Set(tiles.map((t) => t.tag)))];

export default function GalleryBlock() {
  const [active, setActive] = useState(ALL_TAG);

  const visible =
    active === ALL_TAG ? tiles : tiles.filter((t) => t.tag === active);

  return (
    <section
      id="signatures"
      className="flex w-full scroll-mt-16 items-center justify-center bg-background px-6 py-20 text-foreground"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Signatures
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Bowls worth the trip
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Four of the desserts regulars cross the island for — tap any bowl
            for the story behind it.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-b border-border pb-6">
          <ToggleGroup
            variant="outline"
            size="sm"
            value={[active]}
            onValueChange={(value) => {
              const next = value[0];
              if (next) setActive(next);
            }}
            aria-label="Filter desserts by category"
            className="flex-wrap justify-center"
          >
            {tags.map((tag) => (
              <ToggleGroupItem
                key={tag}
                value={tag}
                aria-label={`Show ${tag} desserts`}
                className="text-xs font-medium tracking-wide"
              >
                {tag}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
          {visible.map((tile) => (
            <Dialog key={tile.id}>
              <DialogTrigger
                render={
                  <button
                    type="button"
                    aria-label={`View ${tile.label}`}
                    className="group relative block w-full cursor-pointer overflow-hidden bg-card text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  />
                }
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={tile.src}
                    alt={tile.label}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="font-heading text-xl font-semibold text-white">
                          {tile.label}
                        </p>
                        <p className="mt-1 text-sm text-white/70">{tile.price}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="shrink-0 text-[10px] font-semibold tracking-wide uppercase"
                      >
                        {tile.tag}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent showCloseButton className="gap-0 p-0 sm:max-w-2xl">
                <DialogTitle className="sr-only">{tile.label}</DialogTitle>
                <DialogDescription className="sr-only">
                  {tile.label} — {tile.detail}
                </DialogDescription>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-t-[inherit] border-b border-border bg-muted">
                  <img
                    src={tile.src}
                    alt={tile.label}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                        {tile.label}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {tile.detail}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="shrink-0 text-[10px] font-semibold tracking-wide uppercase"
                    >
                      {tile.tag}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
                    <span className="font-heading text-xl font-bold text-primary">
                      {tile.price}
                    </span>
                    <DialogClose
                      render={<Button variant="outline" size="sm" />}
                    >
                      Close
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Showing {visible.length} of {tiles.length} signatures — the full menu
          has 30+ desserts.
        </p>
      </div>
    </section>
  );
}
