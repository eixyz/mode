// Shows the whole image (posters and flyers often contain text that must not be
// cropped) and fills the remaining space with a blurred copy of the same image.
export const PosterImage = ({ src }: { src: string }) => (
  <>
    <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-60" />
    <img src={src} alt="" className="absolute inset-0 h-full w-full object-contain" />
  </>
);
