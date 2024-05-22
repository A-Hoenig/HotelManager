import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "discounted", label: "Discounted" },
          { value: "no-discount", label: "No-Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name ⬇" },
          { value: "name-dec", label: "Sort by Name ⬆" },
          { value: "regularPrice-asc", label: "Sort by Price ⬇" },
          { value: "regularPrice-dec", label: "Sort by Price ⬆" },
          { value: "maxCapacity-asc", label: "Sort by Capacity ⬇" },
          { value: "maxCapacity-dec", label: "Sort by Capacity ⬆" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
