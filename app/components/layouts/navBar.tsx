import Link from 'next/link';
import { ModeToggle } from '~/components/ui/modeToggle';

export function NavBar() {
  return (
    <div className="flex flex-row justify-between sticky items-center top-0 w-full border-b-2 p-1 h-[50px] bg-background">
      <div className="pl-5 flex flex-row items-baseline gap-5">
        <Link href={'/'} className="text-2xl font-semibold hover:text-blue-700">
          ZipChat
        </Link>
        <Link href={'/dashboard'} className="hover:text-blue-700">
          /dashboard
        </Link>
      </div>
      <div className="pr-1">
        <ModeToggle />
      </div>
    </div>
  );
}
