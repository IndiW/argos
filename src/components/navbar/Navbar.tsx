/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function NavBar() {

    const LOGO_LABEL = "DR.SENURI"

    const TABS = [
        {
            label: 'Home',
            route: '#'
        },
        {
            label: 'About',
            route: '#'
        },
        {
            label: 'Tools',
            route: '#'
        },
        {
            label: 'Testimonials',
            route: '#'
        },
        {
            label: 'Book an appointment',
            route: '#'
        }
    ]

    const LOGO = <a href="#" className="mr-6 hidden lg:flex" >
        <GlassesIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold text-[14px]">{LOGO_LABEL}</span>
    </a>

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 absolute top-0">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    {LOGO}
                    <div className="grid gap-2 py-6">
                        {TABS.map((tab) => <a href={tab.route} className="flex w-full items-center py-2 text-lg font-semibold" key={tab.label + "desktop"}>
                            {tab.label}
                        </a>)}
                    </div>
                </SheetContent>
            </Sheet>
            {LOGO}
            <nav className="ml-auto hidden lg:flex gap-6">
                {TABS.map((tab) => <a key={tab.label + "mobile"} href={tab.route} className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                    {tab.label}
                </a>)}

            </nav>
        </header>
    )
}

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any additional specific props here if needed
}
function MenuIcon(props: MenuIconProps) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

interface GlassesIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any additional specific props here if needed
}

function GlassesIcon(props: GlassesIconProps) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            {...props}
        >
            <path d="M10 15 A4 4 0 0 1 6 19 A4 4 0 0 1 2 15 A4 4 0 0 1 10 15 z" />
            <path d="M22 15 A4 4 0 0 1 18 19 A4 4 0 0 1 14 15 A4 4 0 0 1 22 15 z" />
            <path d="M14 15a2 2 0 00-2-2 2 2 0 00-2 2M2.5 13L5 7c.7-1.3 1.4-2 3-2M21.5 13L19 7c-.7-1.3-1.5-2-3-2" />
        </svg>
    )
}