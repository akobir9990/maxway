import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";
import { allFillials } from "../../const";

export default function YMap() {
  return (
    <YMaps>
      <Map
        className="h-[500px]"
        defaultState={{ center: [41.311198, 69.279746], zoom: 15 }}
      >
        {allFillials.map((fillial) => {
          return (
            <Placemark key={fillial.id} geometry={[fillial.lat, fillial.lon]} />
          );
        })}
      </Map>
    </YMaps>
  );
}
