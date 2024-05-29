import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
export default function School(props) {
  const {
    regija,
    obcina,
    naziv,
    naslov,
    postna_stevilka,
    posta,
    email,
    ds,
    web,
    trr,
  } = props.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{naziv}</CardTitle>
        <CardDescription>{obcina}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-bold">naslov: </span>
          {naslov}, {postna_stevilka} {posta}
        </p>
        <p>
          <strong>e-poštni naslov: </strong>
          {email}
        </p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>
            <Button>več informacij</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>dodatne informacije o šoli</DialogTitle>
              <DialogDescription>
                <p>davčna številka: {ds}</p>
                <p>bančni račun: {trr}</p>
                <p>spletna stran: {web}</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
