import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function Info(props) {
  const filter = props.filter;
  return (
    <>
      <Sheet>
        <SheetTrigger>odpri</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Število šol: {filter.length}</SheetTitle>
            <SheetDescription>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Šola</TableHead>
                    <TableHead>E-pošta</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filter.map((school) => (
                    <TableRow>
                      <TableCell>{school.naziv}</TableCell>
                      <TableCell>{school.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
