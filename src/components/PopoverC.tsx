import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverC() {
  return (
    <Popover>
      <PopoverTrigger asChild >
        <Button className="rounded-full w-16 h-16">Add</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mb-10 py-7">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">New Task</h4>
            <p className="text-sm text-muted-foreground">
              Add a new task to the list
            </p>
          </div>
          <div className="">
            <Input id="width" className="col-span-2 h-8" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
