import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="w-full py-6 bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <div className="container flex items-center justify-between gap-4 px-4 text-sm md:px-6">
            <div className="flex items-center gap-4">
              <Link className="flex items-center gap-2 text-base font-medium tracking-wider uppercase" href="#">
                <FlagIcon className="w-6 h-6 rounded-full bg-gray-950" />
                Company
              </Link>
              <p className="hidden md:block">
                Beautiful and functional designs with shadcn. Crafted by the creators of Tailwind CSS.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="rounded-full border border-gray-200 border-gray-200 inline-flex h-8 items-center justify-center overflow-hidden bg-white shadow-sm hover:shadow transition-colors peer disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-gray-950 dark:peer"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="w-4 h-4 peer-hover:scale-95 transition-transform text-twitter dark:text-twitter-invert" />
              </Link>
              <Link
                className="rounded-full border border-gray-200 border-gray-200 inline-flex h-8 items-center justify-center overflow-hidden bg-white shadow-sm hover:shadow transition-colors peer disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-gray-950 dark:peer"
                href="#"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-4 h-4 peer-hover:scale-95 transition-transform text-instagram dark:text-instagram-invert" />
              </Link>
              <Link
                className="rounded-full border border-gray-200 border-gray-200 inline-flex h-8 items-center justify-center overflow-hidden bg-white shadow-sm hover:shadow transition-colors peer disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-gray-950 dark:peer"
                href="#"
              >
                <span className="sr-only">YouTube</span>
                <YoutubeIcon className="w-4 h-4 peer-hover:scale-95 transition-transform text-youtube dark:text-youtube-invert" />
              </Link>
            </div>
          </div>
          <div className="container flex items-center justify-between gap-4 px-4 text-xs md:px-6">
            <p className="text-gray-500">© 2024 Company. All rights reserved.</p>
            <nav className="flex items-center gap-4 text-sm">
              <Link
                className="font-medium text-gray-300 hover:text-gray-50 dark:text-gray-700 dark:hover:text-gray-950"
                href="#"
              >
                Terms
              </Link>
              <Link
                className="font-medium text-gray-300 hover:text-gray-50 dark:text-gray-700 dark:hover:text-gray-950"
                href="#"
              >
                Privacy
              </Link>
              <Link
                className="font-medium text-gray-300 hover:text-gray-50 dark:text-gray-700 dark:hover:text-gray-950"
                href="#"
              >
                Support
              </Link>
            </nav>
          </div>
        </footer>
      )
}

function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}