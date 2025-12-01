import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between bg-gray-100 px-8 py-4">
      <h1 className="mb-4 text-2xl font-semibold">Cenownik</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Title of dialog</DialogTitle>
            <DialogDescription>Some description...</DialogDescription>
          </DialogHeader>
          <p>form</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};
export default Navbar;
