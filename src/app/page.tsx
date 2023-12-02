"use client"
import Image from 'next/image'
import { photowallThumbs, photowall, annualballThumbs, annualball } from './sources'

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import AkysticLogo from "../../public/AkysticLogo.svg"

import { useState } from 'react';
import type { RenderPhotoProps } from "react-photo-album";

function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}

export default function Home() {
  const [index, setIndex] = useState(-1)
  const [view, setView] = useState("none")
  return (
    <div className="max-w-6xl mx-auto text-center min-h-screen px-4 py-8">
      <Image
        priority
        src={AkysticLogo}
        alt='Akystic Logo'
        width={300}
        height={150}
        className='mx-auto mb-8'
      />
      <p className='mb-4 text-xl'>
        Akystic 10v vuosijuhlat 28.10.2023, Betonimiehenkuja 3
      </p>
      <p className='mb-4'>
        Mikäli haluat jonkun kuvan poistettavan tältä sivulta, lähetä kuvan numero osoitteeseen <a href='mailto:akystic@ky.fi' className='underline'>akystic@ky.fi</a>
      </p>
      <p className='mb-8'>
        Kuvaaja: Filip Eller. Kuvaajan nimi mainittava julkaistaessa.
      </p>
      <div className='flex mx-auto justify-center gap-4 sm:gap-10 mb-8'>
        <button
          className={'w-[180px] h-[90px] sm:w-[400px] sm:h-[200px] bg-photowall bg-center bg-cover text-2xl sm:text-5xl rounded-md text-gray-200 '
            + (view === "photowall" ? 'border-2 font-bold' : 'border-0 font-normal')}
          onClick={() => {
            if (view !== "photowall")
              setView("photowall")
            else
              setView("none")
          }}>
          Kuvausseinä
        </button>
        <button
          className={'w-[180px] h-[90px] sm:w-[400px] sm:h-[200px] bg-annualball bg-center bg-cover text-2xl sm:text-5xl rounded-md text-gray-200 '
            + (view === "annualball" ? 'border-2 font-bold' : 'border-0 font-normal')}
          onClick={() => {
            if (view !== "annualball")
              setView("annualball")
            else
              setView("none")
          }}>
          Vuosijuhlat
        </button>
      </div>
      <PhotoAlbum
        layout="rows"
        photos={view === 'photowall' ? photowallThumbs : view === 'annualball' ? annualballThumbs : []}
        renderPhoto={NextJsImage}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={view === 'photowall' ? photowall : view === 'annualball' ? annualball : []}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Download, Zoom, Counter]}
        thumbnails={{
          position: "bottom",
          width: 64,
          height: 64,
          imageFit: 'cover',
          border: 0
        }}
      />
    </div>
  )
}
