import { useEffect, useState } from "react";
import School from "./School";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "./Info";

export default function App() {
  const [data, setData] = useState([]);
  const [obcine, setObcine] = useState([]);
  const [izObcina, setIzObcina] = useState("vse");
  const [izPostnaStevilka, setIzPostnaStevilka] = useState();
  const [filter, setFilter] = useState([]);

  async function getSchools() {
    const response = await fetch("http://static.404.si/grace/");
    const data = await response.json();
    setData(data);
  }

  async function getMunicipality() {
    const response = await fetch("http://static.404.si/grace/obcine/");
    const data = await response.json();
    setObcine(data);
  }

  useEffect(() => {
    getSchools();
    getMunicipality();
  }, []);

  useEffect(() => {
    setFilter(
      data
        .filter((school) => izObcina == "vse" || school.obcina == izObcina)
        .filter(
          (school) =>
            izPostnaStevilka == null ||
            school.postna_stevilka.toString().startsWith(izPostnaStevilka),
        ),
    );
  }, [data, izPostnaStevilka, izObcina]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <>
      <div className="container mb-4 mt-4">
        <div className="flex gap-4">
          {/* Ne pozabi na onValueChange event. */}
          <Select onValueChange={(value) => setIzObcina(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="vse občine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vse">vse občine</SelectItem>
              {obcine.map((obcina) => (
                <SelectItem value={obcina}>{obcina}</SelectItem>
              ))}
              {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse občine in jih prikazala v obliki SelectItemov. */}
            </SelectContent>
          </Select>
          <Input
            onChange={(e) => setIzPostnaStevilka(e.currentTarget.value)}
            placeholder="iskanje po poštni številki"
          />
          <Info filter={filter}></Info>
          {/* Dodaj input, ki bo omogčal iskanje po poštni številki. Ne pozabi na onChange event. */}
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse šole in jih prikazala v obliki kartic. */}
          {/* Dodaj dva filtra: enega za filtriranje po obcini, drugega za filtriranje glede na poštno številko šole. */}
          {filter.map((school) => (
            <div>
              <School data={school}></School>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
