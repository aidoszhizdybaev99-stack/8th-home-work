// Data model for an airline delay dashboard
type FlightStatus = "scheduled" | "delayed" | "cancelled";

interface Flight {
  code: string;
  from: string;
  to: string;
  delayMin: number;
  status: FlightStatus;
  international: boolean;
}

const flights: Flight[] = [
  { code: "KC 851", from: "NQZ", to: "ALA", delayMin: 0, status: "scheduled", international: false },
  { code: "KC 921", from: "ALA", to: "IST", delayMin: 45, status: "delayed", international: true },
  { code: "DV 703", from: "NQZ", to: "URA", delayMin: 0, status: "cancelled", international: false },
];

function delayed(list: Flight[]): Flight[] {
  return list.filter((f) => f.status === "delayed");
}

function totalDelay(list: Flight[]): number {
  let sum = 0;
  for (const f of list) {
    sum = sum + f.delayMin;
  }
  return sum;
}

console.log(delayed(flights).map((f) => f.code));
console.log(totalDelay(flights));

const internationalFlights = flights.filter(function(f) {
  return f.international;
});
console.log(internationalFlights.map((f) => f.code));
const routes = flights.map(function(f) {
  return `${f.from} -> ${f.to}`;
});
console.log(routes);
const found = flights.find(function(f) {
  return f.code === "KC 851";
});
if (found) {
  console.log(`Flight ${found.code} is from ${found.from} to ${found.to}`);
}

console.log("1");
console.log(internationalFlights.map((f) => f.code));
console.log("2");
console.log(routes);
console.log("3");
console.log(found);




